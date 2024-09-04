import Navigation from '@/components/layouts/Navigation';
// import { Button } from '@/components/ui/button.tsx';
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu.tsx';
// import { Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex min-h-screen">
      <Navigation />
      <div className="flex-1 overflow-y-auto">
        <header className="sticky top-0 z-10 border-b bg-white/80 px-4 py-3 backdrop-blur-md dark:bg-gray-900/80">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold">Privacy Center</h1>
            <div className="flex items-center gap-4">
              {/* <Button size='icon' variant='ghost'>
                                <span className='sr-only'>Search</span>
                            </Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button size='icon' variant='ghost'>
                                        <span className='sr-only'>User Menu</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align='end'>
                                    <DropdownMenuLabel>No Use</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>No Use</DropdownMenuItem>
                                    <DropdownMenuItem>No Use</DropdownMenuItem>
                                    <DropdownMenuItem>No Use</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu> */}
            </div>
          </div>
        </header>
        <main className="p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
