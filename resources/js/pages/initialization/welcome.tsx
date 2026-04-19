import { Head, Link } from '@inertiajs/react';
import { welcome } from '@/routes/initialization';
import { Button } from '@/components/ui/button';

export default function Welcome() {
    return (
        <>
            <Head title="Initialisation" />
            
            <div className="flex h-full flex-1 flex-col items-center justify-center p-4">
                <div className="w-full max-w-2xl">
                    <div className="overflow-hidden rounded-xl border border-sidebar-border/70 bg-white dark:border-sidebar-border dark:bg-[#161615]">
                        <div className="p-8 text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30">
                                <svg
                                    className="h-8 w-8 text-indigo-600 dark:text-indigo-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M12 4.5v15m7.5-7.5h-15"
                                    />
                                </svg>
                            </div>
                            
                            <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-[#EDEDEC]">
                                Prêt à commencer ?
                            </h2>
                            
                            <p className="mt-2 text-sm text-gray-500 dark:text-[#A1A09A]">
                                Vous n'avez pas encore créé d'exercices dans votre application.
                                <br />
                                Commencez par ajouter votre premier exercice pour démarrer.
                            </p>
                            
                            <div className="mt-8">
                                <Button
                                    type="button"
                                    asChild
                                >
                                    <Link
                                        href="#"
                                    >
                                        <svg
                                            className="h-4 w-4"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                        </svg>
                                        Créer mon premier exercice
                                    </Link>
                                </Button>
                                
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                        <div className="rounded-lg border border-sidebar-border/70 bg-white p-4 dark:border-sidebar-border dark:bg-[#161615]">
                            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-indigo-50 dark:bg-indigo-950/30">
                                <svg className="h-4 w-4 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="mt-3 text-sm font-medium text-gray-900 dark:text-[#EDEDEC]">Rapide</h3>
                            <p className="mt-1 text-xs text-gray-500 dark:text-[#A1A09A]">
                                Créez un exercice en moins d'une minute
                            </p>
                        </div>
                        
                        <div className="rounded-lg border border-sidebar-border/70 bg-white p-4 dark:border-sidebar-border dark:bg-[#161615]">
                            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-purple-50 dark:bg-purple-950/30">
                                <svg className="h-4 w-4 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                                </svg>
                            </div>
                            <h3 className="mt-3 text-sm font-medium text-gray-900 dark:text-[#EDEDEC]">Flexible</h3>
                            <p className="mt-1 text-xs text-gray-500 dark:text-[#A1A09A]">
                                Adaptez les exercices à vos besoins
                            </p>
                        </div>
                        
                        <div className="rounded-lg border border-sidebar-border/70 bg-white p-4 dark:border-sidebar-border dark:bg-[#161615]">
                            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-green-50 dark:bg-green-950/30">
                                <svg className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="mt-3 text-sm font-medium text-gray-900 dark:text-[#EDEDEC]">Suivi facile</h3>
                            <p className="mt-1 text-xs text-gray-500 dark:text-[#A1A09A]">
                                Visualisez la progression en temps réel
                            </p>
                        </div>
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