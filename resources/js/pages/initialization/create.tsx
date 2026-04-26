import { Form, Head } from '@inertiajs/react';
import ExerciseController from '@/actions/App/Http/Controllers/ExerciseController';
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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { create, welcome } from '@/routes/initialization';
import type { ExerciseFormData } from '@/types';

const defaultExerciseValues: ExerciseFormData = {
    start_date: new Date().toISOString().split('T')[0] ?? '',
    fund: '0.00',
    receivable: '0.00',
    payable: '0.00',
};

export default function Create() {
    return (
        <>
            <Head title="Créer un exercice" />

            <div className="flex h-full flex-1 flex-col gap-6 p-4">
                <div className="max-w-3xl">
                    <Heading
                        title="Nouvel exercice"
                        description="Définissez les paramètres initiaux de votre session de travail."
                    />
                </div>

                <div className="w-full max-w-3xl">
                    <Form
                        {...ExerciseController.store.form()}
                        options={{
                            preserveScroll: true,
                        }}
                        className="space-y-8"
                    >
                        {({ errors, processing }) => (
                            <>
                                <Card className="border-sidebar-border/70 shadow-none">
                                    <CardHeader>
                                        <CardTitle>
                                            Informations générales
                                        </CardTitle>
                                        <CardDescription>
                                            Date de début de l'exercice.
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent>
                                        <div className="max-w-md">
                                            <Label htmlFor="start_date">
                                                Date de début
                                            </Label>

                                            <Input
                                                id="start_date"
                                                type="date"
                                                className="mt-1 block w-full"
                                                defaultValue={
                                                    defaultExerciseValues.start_date
                                                }
                                                name="start_date"
                                                required
                                                placeholder="Date de début"
                                            />

                                            <InputError
                                                className="mt-2"
                                                message={errors.start_date}
                                            />

                                            <p className="mt-2 text-xs text-muted-foreground">
                                                Cette date marque le début de
                                                votre session de travail.
                                                L'exercice restera ouvert
                                                jusqu'à la prochaine ouverture.
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-sidebar-border/70 shadow-none">
                                    <CardHeader>
                                        <CardTitle>
                                            Situation financière initiale
                                        </CardTitle>
                                        <CardDescription>
                                            Renseignez les montants disponibles
                                            au démarrage de l'exercice.
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent>
                                        <div className="grid gap-6 md:grid-cols-2">
                                            <div className="md:col-span-2">
                                                <Label htmlFor="fund">
                                                    Fonds disponibles
                                                </Label>

                                                <Input
                                                    id="fund"
                                                    type="number"
                                                    step="0.01"
                                                    min="0"
                                                    className="mt-1 block w-full"
                                                    defaultValue={
                                                        defaultExerciseValues.fund
                                                    }
                                                    name="fund"
                                                    required
                                                    placeholder="0.00"
                                                />

                                                <InputError
                                                    className="mt-2"
                                                    message={errors.fund}
                                                />

                                                <p className="mt-2 text-xs text-muted-foreground">
                                                    Trésorerie et équivalents
                                                    disponibles pour l'exercice.
                                                </p>
                                            </div>

                                            <div>
                                                <Label htmlFor="receivable">
                                                    Créances
                                                </Label>

                                                <Input
                                                    id="receivable"
                                                    type="number"
                                                    step="0.01"
                                                    min="0"
                                                    className="mt-1 block w-full"
                                                    defaultValue={
                                                        defaultExerciseValues.receivable
                                                    }
                                                    name="receivable"
                                                    required
                                                    placeholder="0.00"
                                                />

                                                <InputError
                                                    className="mt-2"
                                                    message={errors.receivable}
                                                />

                                                <p className="mt-2 text-xs text-muted-foreground">
                                                    Montants à recevoir
                                                    (clients, débiteurs).
                                                </p>
                                            </div>

                                            <div>
                                                <Label htmlFor="payable">
                                                    Dettes
                                                </Label>

                                                <Input
                                                    id="payable"
                                                    type="number"
                                                    step="0.01"
                                                    min="0"
                                                    className="mt-1 block w-full"
                                                    defaultValue={
                                                        defaultExerciseValues.payable
                                                    }
                                                    name="payable"
                                                    required
                                                    placeholder="0.00"
                                                />

                                                <InputError
                                                    className="mt-2"
                                                    message={errors.payable}
                                                />

                                                <p className="mt-2 text-xs text-muted-foreground">
                                                    Montants à payer
                                                    (fournisseurs, créditeurs).
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <div className="flex items-center gap-3 border-t border-sidebar-border/70 pt-6">
                                    <Button disabled={processing}>
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
