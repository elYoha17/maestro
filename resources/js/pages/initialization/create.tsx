import { Form, Head, useForm } from '@inertiajs/react';
import { welcome, create } from '@/routes/initialization';
import ExerciseController from '@/actions/App/Http/Controllers/ExerciseController';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';

export default function Create() {
    return (
        <>
            <Head title="Créer un exercice" />
            
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-900 dark:text-[#EDEDEC]">
                            Nouvel exercice
                        </h1>
                        <p className="mt-1 text-sm text-gray-500 dark:text-[#A1A09A]">
                            Définissez les paramètres initiaux de votre session de travail
                        </p>
                    </div>
                </div>
                
                <div className="w-full max-w-3xl">
                    <Form
                        {...ExerciseController.store.form()}
                        options={{
                            preserveScroll: true,
                        }}
                        className="space-y-8"
                    >
                        {({errors, processing}) => (
                            <>
                                <div className="overflow-hidden rounded-xl border border-sidebar-border/70 bg-white dark:border-sidebar-border dark:bg-[#161615]">
                                    <div className="border-b border-sidebar-border/70 px-6 py-4 dark:border-sidebar-border">
                                        <h2 className="text-base font-semibold text-gray-900 dark:text-[#EDEDEC]">
                                            Informations générales
                                        </h2>
                                        <p className="mt-0.5 text-sm text-gray-500 dark:text-[#A1A09A]">
                                            Date de début de l'exercice
                                        </p>
                                    </div>
                                    
                                    <div className="p-6">
                                        <div className="max-w-md">
                                            <Label htmlFor="start_date">Date de début</Label>
            
                                            <Input
                                                id="start_date"
                                                type="date"
                                                className="mt-1 block w-full"
                                                defaultValue={new Date().toISOString().split('T')[0]}
                                                name="start_date"
                                                required
                                                placeholder="Date de début"
                                            />
                                            
                                            <InputError
                                                className="mt-2"
                                                message={errors.start_date}
                                            />
                                            
                                            <p className="mt-2 text-xs text-gray-500 dark:text-[#A1A09A]">
                                                Cette date marque le début de votre session de travail. L'exercice restera ouvert jusqu'à la prochaine ouverture.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="overflow-hidden rounded-xl border border-sidebar-border/70 bg-white dark:border-sidebar-border dark:bg-[#161615]">
                                    <div className="border-b border-sidebar-border/70 px-6 py-4 dark:border-sidebar-border">
                                        <h2 className="text-base font-semibold text-gray-900 dark:text-[#EDEDEC]">
                                            Situation financière initiale
                                        </h2>
                                        <p className="mt-0.5 text-sm text-gray-500 dark:text-[#A1A09A]">
                                            Renseignez les montants disponibles au démarrage de l'exercice
                                        </p>
                                    </div>
                            
                                    <div className="p-6">
                                        <div className="grid gap-6 md:grid-cols-2">
                                            <div className="md:col-span-2">
                                                <Label htmlFor="fund">Fonds disponibles</Label>
            
                                                <Input
                                                    id="fund"
                                                    type="number"
                                                    step="0.01"
                                                    min="0"
                                                    className="mt-1 block w-full"
                                                    defaultValue={new Date().toISOString().split('T')[0]}
                                                    name="fund"
                                                    required
                                                    placeholder="0.00"
                                                />
                                                
                                                <InputError
                                                    className="mt-2"
                                                    message={errors.fund}
                                                />
                                                
                                                <p className="mt-2 text-xs text-gray-500 dark:text-[#A1A09A]">
                                                    Trésorerie et équivalents disponibles pour l'exercice
                                                </p>
                                            </div>
                                            
                                            <div>
                                                <Label htmlFor="receivable">Créances</Label>
            
                                                <Input
                                                    id="receivable"
                                                    type="number"
                                                    step="0.01"
                                                    min="0"
                                                    className="mt-1 block w-full"
                                                    defaultValue={new Date().toISOString().split('T')[0]}
                                                    name="receivable"
                                                    required
                                                    placeholder="0.00"
                                                />
                                                
                                                <InputError
                                                    className="mt-2"
                                                    message={errors.receivable}
                                                />

                                                <p className="mt-2 text-xs text-gray-500 dark:text-[#A1A09A]">
                                                    Montants à recevoir (clients, débiteurs)
                                                </p>
                                            </div>

                                            <div>
                                                <Label htmlFor="payable">Dettes</Label>
            
                                                <Input
                                                    id="payable"
                                                    type="number"
                                                    step="0.01"
                                                    min="0"
                                                    className="mt-1 block w-full"
                                                    defaultValue={new Date().toISOString().split('T')[0]}
                                                    name="payable"
                                                    required
                                                    placeholder="0.00"
                                                />
                                                
                                                <InputError
                                                    className="mt-2"
                                                    message={errors.payable}
                                                />
                                                
                                                <p className="mt-2 text-xs text-gray-500 dark:text-[#A1A09A]">
                                                    Montants à payer (fournisseurs, créditeurs)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-3 border-t border-sidebar-border/70 pt-6 dark:border-sidebar-border">
                                    <Button
                                        disabled={processing}
                                    >
                                        Démarrer l'exercice
                                    </Button>
                                </div>
                            </>
                        )}
                    </Form>
                </div>
            </div>
        </>
    );
}

Create.layout = {
    breadcrumbs: [
        {
            title: 'Initialisation',
            href: welcome(),
        },
        {
            title: 'Nouvel exercice',
            href: create(),
        },
    ],
};