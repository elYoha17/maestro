import { usePage, Link } from '@inertiajs/react';
import { BookOpen, FolderGit2, LayoutGrid, Play, Apple } from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useCurrentUrl } from '@/hooks/use-current-url';
import { dashboard } from '@/routes';
import { index as initializationIndex } from '@/routes/initialization';
import { index as productsIndex } from '@/routes/products';
import type { NavItem } from '@/types';

export function AppSidebar() {
    const { isCurrentOrParentUrl } = useCurrentUrl();
    const {currentDate} = usePage().props;

    const mainNavItems: NavItem[] = [
        {
            title: 'Dashboard',
            href: dashboard(),
            icon: LayoutGrid,
        },
    ];

    const initializationNavItems: NavItem[] = [
        {
            title: 'Initialisation',
            href: initializationIndex(),
            icon: Play,
            isActive: isCurrentOrParentUrl(initializationIndex()),
        },
        {
            title: 'Produits',
            href: productsIndex(),
            icon: Apple,
            isActive: isCurrentOrParentUrl(productsIndex()),
        },
    ];

    const footerNavItems: NavItem[] = [
        {
            title: 'Repository',
            href: 'https://github.com/laravel/react-starter-kit',
            icon: FolderGit2,
        },
        {
            title: 'Documentation',
            href: 'https://laravel.com/docs/starter-kits#react',
            icon: BookOpen,
        },
    ];

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={currentDate ? mainNavItems : initializationNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
