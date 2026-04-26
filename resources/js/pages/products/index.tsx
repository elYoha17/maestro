import { Form, Head, router } from '@inertiajs/react';
import {
    MoreHorizontal,
    PackageOpen,
    Pencil,
    Plus,
    Trash2,
} from 'lucide-react';
import { useState } from 'react';
import Heading from '@/components/heading';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
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
    destroy as destroyProduct,
    index as productsIndex,
    store as storeProduct,
    update as updateProduct,
} from '@/routes/products';
import type { Product } from '@/types';

interface Props {
    products: Product[];
}

const moneyFormatter = new Intl.NumberFormat("fr-CD", {
    style: 'currency',
    currency: 'CDF',
    maximumFractionDigits: 0,
    useGrouping: true,
});

export default function ProductsIndex({ products }: Props) {
    const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);

    const handleDeleteProduct = (product: Product) => {
        if (
            confirm(
                `Êtes-vous sûr de vouloir supprimer le produit "${product.name}" ?`,
            )
        ) {
            router.delete(destroyProduct.url(product), {
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

    const handleDialogChange = (open: boolean) => {
        if (!open) {
            resetProductDialog();

            return;
        }

        setIsProductDialogOpen(true);
    };

    return (
        <>
            <Head title="Produits" />

            <div className="space-y-6 p-4">
                <div className="flex items-center justify-between gap-4">
                    <Heading
                        variant="small"
                        title="Produits"
                        description="Gérez votre catalogue de produits."
                    />

                    <Dialog
                        open={isProductDialogOpen}
                        onOpenChange={handleDialogChange}
                    >
                        <DialogTrigger asChild>
                            <Button onClick={() => setEditingProduct(null)}>
                                <Plus className="size-4" />
                                Ajouter un produit
                            </Button>
                        </DialogTrigger>

                        <DialogContent className="sm:max-w-106.25">
                            <DialogHeader>
                                <DialogTitle>
                                    {editingProduct
                                        ? 'Modifier le produit'
                                        : 'Nouveau produit'}
                                </DialogTitle>
                                <DialogDescription>
                                    {editingProduct
                                        ? 'Mettez à jour les informations essentielles du produit.'
                                        : 'Ajoutez un nouveau produit à votre catalogue.'}
                                </DialogDescription>
                            </DialogHeader>

                            <Form
                                key={editingProduct?.id ?? 'new-product'}
                                {...(editingProduct
                                    ? updateProduct.form(editingProduct)
                                    : storeProduct.form())}
                                options={{
                                    preserveScroll: true,
                                }}
                                resetOnSuccess
                                onSuccess={resetProductDialog}
                            >
                                {({ errors, processing }) => (
                                    <>
                                        <div className="grid gap-4 py-4">
                                            <div className="grid gap-2">
                                                <Label htmlFor="name">
                                                    Nom
                                                </Label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    defaultValue={
                                                        editingProduct?.name
                                                    }
                                                    required
                                                />
                                                <InputError
                                                    message={errors.name}
                                                />
                                            </div>

                                            <div className="grid gap-2">
                                                <Label htmlFor="sku">SKU</Label>
                                                <Input
                                                    id="sku"
                                                    name="sku"
                                                    defaultValue={
                                                        editingProduct?.sku
                                                    }
                                                    required={!editingProduct}
                                                    readOnly={Boolean(
                                                        editingProduct,
                                                    )}
                                                    disabled={Boolean(
                                                        editingProduct,
                                                    )}
                                                />
                                                <InputError
                                                    message={errors.sku}
                                                />
                                                {editingProduct && (
                                                    <p className="text-xs text-muted-foreground">
                                                        Le SKU est défini à la
                                                        création du produit.
                                                    </p>
                                                )}
                                            </div>

                                            <div className="grid gap-2">
                                                <Label htmlFor="price">
                                                    Prix
                                                </Label>
                                                <Input
                                                    id="price"
                                                    name="price"
                                                    type="number"
                                                    step="0.01"
                                                    min="0"
                                                    defaultValue={
                                                        editingProduct?.price
                                                    }
                                                    required
                                                />
                                                <InputError
                                                    message={errors.price}
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
                                            <Button
                                                type="submit"
                                                disabled={processing}
                                            >
                                                {editingProduct
                                                    ? 'Enregistrer'
                                                    : 'Créer'}
                                            </Button>
                                        </DialogFooter>
                                    </>
                                )}
                            </Form>
                        </DialogContent>
                    </Dialog>
                </div>

                <Card className="border-sidebar-border/70 shadow-none">
                    <CardHeader className="gap-2">
                        <CardTitle>Catalogue</CardTitle>
                        <CardDescription>
                            Consultez et administrez les produits disponibles
                            dans l'application.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="px-0">
                        {products.length === 0 ? (
                            <div className="flex flex-col items-center justify-center gap-3 px-6 py-14 text-center">
                                <div className="flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
                                    <PackageOpen className="size-5" />
                                </div>
                                <div className="space-y-1">
                                    <p className="font-medium">
                                        Aucun produit enregistré
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Ajoutez votre premier produit pour
                                        commencer à structurer votre catalogue.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Nom</TableHead>
                                        <TableHead>SKU</TableHead>
                                        <TableHead>Prix</TableHead>
                                        <TableHead className="w-25 text-right">
                                            Actions
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>

                                <TableBody>
                                    {products.map((product) => (
                                        <TableRow key={product.id}>
                                            <TableCell className="font-medium">
                                                {product.name}
                                            </TableCell>
                                            <TableCell>{product.sku}</TableCell>
                                            <TableCell className='text-right'>
                                                {moneyFormatter.format(
                                                    product.price,
                                                )}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger
                                                        asChild
                                                    >
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                        >
                                                            <MoreHorizontal className="size-4" />
                                                            <span className="sr-only">
                                                                Ouvrir les
                                                                actions du
                                                                produit
                                                            </span>
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end">
                                                        <DropdownMenuItem
                                                            onClick={() =>
                                                                handleEditProduct(
                                                                    product,
                                                                )
                                                            }
                                                        >
                                                            <Pencil className="mr-2 size-4" />
                                                            Modifier
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem
                                                            className="text-destructive focus:text-destructive"
                                                            onClick={() =>
                                                                handleDeleteProduct(
                                                                    product,
                                                                )
                                                            }
                                                        >
                                                            <Trash2 className="mr-2 size-4" />
                                                            Supprimer
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        )}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

ProductsIndex.layout = {
    breadcrumbs: [
        {
            title: 'Produits',
            href: productsIndex(),
        },
    ],
};
