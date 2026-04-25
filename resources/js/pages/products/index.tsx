import { Head, router } from '@inertiajs/react';
import { useState } from 'react';
import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Pencil, Plus, Trash2, MoreHorizontal } from 'lucide-react';

interface Product {
    id: number;
    name: string;
    sku: string;
    price: number;
}

interface Props {
    products: Product[];
}

export default function ProductsIndex({ products }: Props) {
    const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);

    const handleDeleteProduct = (productId: number) => {
        if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
            router.delete(`/products/${productId}`, {
                preserveScroll: true,
            });
        }
    };

    const handleEditProduct = (product: Product) => {
        setEditingProduct(product);
        setIsProductDialogOpen(true);
    };

    const resetProductDialog = () => {
        setEditingProduct(null);
        setIsProductDialogOpen(false);
    };

    return (
        <>
            <Head title="Produits" />

            <div className="p-4 space-y-6">
                <div className="flex items-center justify-between">
                    <Heading
                        variant="small"
                        title="Produits"
                        description="Gérez votre catalogue de produits"
                    />

                    <Dialog
                        open={isProductDialogOpen}
                        onOpenChange={setIsProductDialogOpen}
                    >
                        <DialogTrigger asChild>
                            <Button onClick={() => setEditingProduct(null)}>
                                <Plus className="mr-2 h-4 w-4" />
                                Ajouter un produit
                            </Button>
                        </DialogTrigger>

                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>
                                    {editingProduct ? 'Modifier le produit' : 'Nouveau produit'}
                                </DialogTitle>
                                <DialogDescription>
                                    {editingProduct
                                        ? 'Modifiez les informations du produit'
                                        : 'Ajoutez un nouveau produit'}
                                </DialogDescription>
                            </DialogHeader>

                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const formData = new FormData(e.currentTarget);

                                    if (editingProduct) {
                                        router.put(
                                            `/products/${editingProduct.id}`,
                                            formData,
                                            {
                                                preserveScroll: true,
                                                onSuccess: resetProductDialog,
                                            }
                                        );
                                    } else {
                                        router.post('/products', formData, {
                                            preserveScroll: true,
                                            onSuccess: resetProductDialog,
                                        });
                                    }
                                }}
                            >
                                <div className="grid gap-4 py-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Nom</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            defaultValue={editingProduct?.name}
                                            required
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="sku">SKU</Label>
                                        <Input
                                            id="sku"
                                            name="sku"
                                            defaultValue={editingProduct?.sku}
                                            required
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="price">Prix</Label>
                                        <Input
                                            id="price"
                                            name="price"
                                            type="number"
                                            step="0.01"
                                            min="0"
                                            defaultValue={editingProduct?.price}
                                            required
                                        />
                                    </div>
                                </div>

                                <DialogFooter>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={resetProductDialog}
                                    >
                                        Annuler
                                    </Button>
                                    <Button type="submit">
                                        {editingProduct ? 'Modifier' : 'Créer'}
                                    </Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>

                <div className="rounded-lg border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Nom</TableHead>
                                <TableHead>SKU</TableHead>
                                <TableHead>Prix</TableHead>
                                <TableHead className="w-[100px]">Actions</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {products.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center">
                                        Aucun produit trouvé
                                    </TableCell>
                                </TableRow>
                            ) : (
                                products.map((product) => (
                                    <TableRow key={product.id}>
                                        <TableCell className="font-medium">
                                            {product.name}
                                        </TableCell>
                                        <TableCell>{product.sku}</TableCell>
                                        <TableCell>
                                            {new Intl.NumberFormat('fr-FR', {
                                                style: 'currency',
                                                currency: 'EUR',
                                            }).format(product.price)}
                                        </TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="sm">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem
                                                        onClick={() => handleEditProduct(product)}
                                                    >
                                                        <Pencil className="mr-2 h-4 w-4" />
                                                        Modifier
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        className="text-destructive dark:text-red-500"
                                                        onClick={() => handleDeleteProduct(product.id)}
                                                    >
                                                        <Trash2 className="mr-2 h-4 w-4" />
                                                        Supprimer
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    );
}

ProductsIndex.layout = {
    breadcrumbs: [
        {
            title: 'Produits',
            href: '/products',
        },
    ],
};
