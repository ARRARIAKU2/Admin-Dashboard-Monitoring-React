import React from "react";
import { Helmet } from "react-helmet";

import "../../assets/css/nucleo-icons.css";
import "../../assets/css/nucleo-svg.css";
import "../../assets/css/argon-dashboard-tailwind.css?v=1.0.1";
import "../../assets/css/soft-ui-dashboard-tailwind.css?v=1.0.5";

import logo from "../../assets/img/logo-ct.png";
import logo1 from "../../assets/img/TRO.png";


function Sidebar() {
    return (
        <>
            <Helmet>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
                <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
                <link href="../../assets/css/nucleo-icons.css" rel="stylesheet" />
                <link href="../../assets/css/nucleo-svg.css" rel="stylesheet" />
                <script src="https://unpkg.com/@popperjs/core@2"></script>
                <link href="../../assets/css/soft-ui-dashboard-tailwind.css?v=1.0.5" rel="stylesheet" />
                <script defer data-site="YOUR_DOMAIN_HERE" src="https://api.nepcha.com/js/nepcha-analytics.js"></script>
            </Helmet>
            <aside class="fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 -translate-x-full bg-white border-0 shadow-xl dark:shadow-none dark:bg-slate-850 max-w-64 ease-nav-brand z-990 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0">
                <div class="h-19">
                    <i class="absolute top-0 right-0 p-4 opacity-50 cursor-pointer fas fa-times dark:text-white text-slate-400 xl:hidden" sidenav-close></i>
                    <a class="block px-8 py-6 m-0 text-sm whitespace-nowrap dark:text-white text-slate-700" href="/" target="_blank">
                        <img src={logo1} class="inline h-full max-w-full transition-all duration-200 dark:hidden ease-nav-brand max-h-12" alt="main_logo" />
                        <img src={logo} class="hidden h-full max-w-full transition-all duration-200 dark:inline ease-nav-brand max-h-12" alt="main_logo" />
                        <span class="ml-1 font-semibold transition-all duration-200 ease-nav-brand"> Portal TRO</span>
                    </a>
                </div>

                <hr class="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />

                <div class="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
                    <ul class="flex flex-col pl-0 mb-0">
                        <li class="mt-0.5 w-full">
                            <a class="py-2.7 shadow-soft-xl text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors" href="/">
                                <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                    <i class="relative top-0 text-sm leading-normal text-blue-500 ni ni-tv-2"></i>
                                </div>
                                <span class="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Dashboard</span>
                            </a>
                        </li>

                        <li class="mt-0.5 w-full">
                            <a class="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" href="/audit">
                                <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                    <i class="relative top-0 text-sm leading-normal text-orange-500 ni ni-calendar-grid-58"></i>
                                </div>
                                <span class="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Audit Trail</span>
                            </a>
                        </li>

                        <li class="mt-0.5 w-full">
                            <a class="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" href="/users">
                                <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center fill-current stroke-0 text-center xl:p-2.5">
                                    <i class="relative top-0 text-sm leading-normal text-emerald-500 ni ni-credit-card"></i>
                                </div>
                                <span class="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">User Management</span>
                            </a>
                        </li>

                        <li class="mt-0.5 w-full">
                            <a class="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" href="/briva">
                                <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                    <i class="relative top-0 text-sm leading-normal text-cyan-500 ni ni-app"></i>
                                </div>
                                <span class="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Briva</span>
                            </a>
                        </li>

                        <li class="w-full mt-4">
                            <h6 class="pl-6 ml-2 font-bold leading-tight uppercase text-xs opacity-60">Account pages</h6>
                        </li>

                        <li class="mt-0.5 w-full">
                            <a class="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" href="/profile">
                                <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                    <i class="relative top-0 text-sm leading-normal text-slate-700 ni ni-single-02"></i>
                                </div>
                                <span class="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Profile</span>
                            </a>
                        </li>

                        <li class="mt-0.5 w-full">
                            <a class="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" href="/signin">
                                <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                    <i class="relative top-0 text-sm leading-normal text-orange-500 ni ni-single-copy-04"></i>
                                </div>
                                <span class="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Sign In</span>
                            </a>
                        </li>

                        <li class="mt-0.5 w-full">
                            <a class="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" href="/signup">
                                <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                    <i class="relative top-0 text-sm leading-normal text-cyan-500 ni ni-collection"></i>
                                </div>
                                <span class="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Sign Up</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar;