import { Head, Link } from '@inertiajs/react';
import {
    ArrowRight,
    ChartColumnIncreasing,
    Rocket,
    Sparkles,
} from 'lucide-react';
import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { create, welcome } from '@/routes/initialization';

const features = [
    {
        title: 'Mise en route rapide',
        description:
            "Créez un exercice en quelques instants et passez directement à l'utilisation.",
        icon: Rocket,
    },
    {
        title: 'Configuration claire',
        description:
            'Définissez vos montants de départ avec une structure simple et lisible.',
        icon: Sparkles,
    },
    {
        title: 'Suivi prêt à l’emploi',
        description:
            'Préparez votre environnement pour piloter vos produits et votre activité.',
        icon: ChartColumnIncreasing,
    },
] as const;

export default function Welcome() {
    return (
        <>
            <Head title="Initialisation" />

            <div className="flex flex-1 flex-col justify-center p-4">
                <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
                    <Card className="overflow-hidden border-sidebar-border/70 shadow-none">
                        <CardContent className="grid gap-8 px-6 py-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:px-8">
                            <div className="space-y-4">
                                <div className="flex size-12 items-center justify-center rounded-xl bg-muted text-foreground">
                                    <Sparkles className="size-5" />
                                </div>

                                <div className="space-y-2">
                                    <Heading
                                        title="Prêt à démarrer votre premier exercice ?"
                                        description="L'initialisation permet de définir votre point de départ comptable avant de gérer vos opérations."
                                    />

                                    <p className="max-w-2xl text-sm text-muted-foreground">
                                        Commencez par créer un exercice avec sa
                                        date d'ouverture et sa situation
                                        financière initiale.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center md:justify-end">
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full md:w-auto"
                                >
                                    <Link href={create()}>
                                        Créer mon premier exercice
                                        <ArrowRight className="size-4" />
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="grid gap-4 md:grid-cols-3">
                        {features.map(({ title, description, icon: Icon }) => (
                            <Card
                                key={title}
                                className="border-sidebar-border/70 shadow-none"
                            >
                                <CardHeader className="gap-4">
                                    <div className="flex size-10 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                                        <Icon className="size-5" />
                                    </div>
                                    <div className="space-y-1">
                                        <CardTitle className="text-base">
                                            {title}
                                        </CardTitle>
                                        <p className="text-sm text-muted-foreground">
                                            {description}
                                        </p>
                                    </div>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

Welcome.layout = {
    breadcrumbs: [
        {
            title: 'Initialisation',
            href: welcome(),
        },
    ],
};
