import React from "react";
import { Helmet } from "react-helmet";

import "../../assets/css/nucleo-icons.css";
import "../../assets/css/nucleo-svg.css";
import "../../assets/css/argon-dashboard-tailwind.css?v=1.0.1";
import "../../assets/css/soft-ui-dashboard-tailwind.css?v=1.0.5";


function Navbar() {
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
            <nav class="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start" navbar-main navbar-scroll="true">
                <div class="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
                    <nav>
                        <ol class="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                            <li class="leading-normal text-sm">
                                <a class="opacity-50 text-slate-700" href="javascript:;">Pages</a>
                            </li>
                            <li class="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/']" aria-current="page">Dashboard</li>
                        </ol>
                        <h6 class="mb-0 font-bold capitalize">Dashboard</h6>
                    </nav>

                    <div class="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
                        <div class="flex items-center md:ml-auto md:pr-4">
                        </div>
                        <ul class="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
                            <li class="flex items-center">
                                <a href="../pages/sign-in.html" class="block px-0 py-2 font-semibold transition-all ease-nav-brand text-sm text-slate-500">
                                    <i class="fa fa-user sm:mr-1"></i>
                                    <span class="hidden sm:inline">Sign In</span>
                                </a>
                            </li>
                            <li class="flex items-center pl-4 xl:hidden">
                                <a href="javascript:;" class="block p-0 transition-all ease-nav-brand text-sm text-slate-500" sidenav-trigger>
                                    <div class="w-4.5 overflow-hidden">
                                        <i class="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                                        <i class="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                                        <i class="ease-soft relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                                    </div>
                                </a>
                            </li>
                            <li class="flex items-center px-4">
                                <a href="javascript:;" class="p-0 transition-all text-sm ease-nav-brand text-slate-500">
                                    <i fixed-plugin-button-nav class="cursor-pointer fa fa-cog"></i>
                                </a>
                            </li>

                            <li class="relative flex items-center pr-2">
                                <p class="hidden transform-dropdown-show"></p>
                                <a href="javascript:;" class="block p-0 transition-all text-sm ease-nav-brand text-slate-500" dropdown-trigger aria-expanded="false">
                                    <i class="cursor-pointer fa fa-bell"></i>
                                </a>

                                <ul dropdown-menu class="text-sm transform-dropdown before:font-awesome before:leading-default before:duration-350 before:ease-soft lg:shadow-soft-3xl duration-250 min-w-44 before:sm:right-7.5 before:text-5.5 pointer-events-none absolute right-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:right-2 before:left-auto before:top-0 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-['\f0d8'] sm:-mr-6 lg:absolute lg:right-0 lg:left-auto lg:mt-2 lg:block lg:cursor-pointer">
                                    <li class="relative mb-2">
                                        <a class="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 lg:transition-colors" href="javascript:;">
                                            <div class="flex py-1">
                                                <div class="my-auto">
                                                    <img src="../assets/img/team-2.jpg" class="inline-flex items-center justify-center mr-4 text-white text-sm h-9 w-9 max-w-none rounded-xl" />
                                                </div>
                                                <div class="flex flex-col justify-center">
                                                    <h6 class="mb-1 font-normal leading-normal text-sm"><span class="font-semibold">New message</span> from Laur</h6>
                                                    <p class="mb-0 leading-tight text-xs text-slate-400">
                                                        <i class="mr-1 fa fa-clock"></i>
                                                        13 minutes ago
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>

                                    <li class="relative mb-2">
                                        <a class="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700" href="javascript:;">
                                            <div class="flex py-1">
                                                <div class="my-auto">
                                                    <img src="../assets/img/small-logos/logo-spotify.svg" class="inline-flex items-center justify-center mr-4 text-white text-sm bg-gradient-to-tl from-gray-900 to-slate-800 h-9 w-9 max-w-none rounded-xl" />
                                                </div>
                                                <div class="flex flex-col justify-center">
                                                    <h6 class="mb-1 font-normal leading-normal text-sm"><span class="font-semibold">New album</span> by Travis Scott</h6>
                                                    <p class="mb-0 leading-tight text-xs text-slate-400">
                                                        <i class="mr-1 fa fa-clock"></i>
                                                        1 day
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>

                                    <li class="relative">
                                        <a class="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700" href="javascript:;">
                                            <div class="flex py-1">
                                                <div class="inline-flex items-center justify-center my-auto mr-4 text-white transition-all duration-200 ease-nav-brand text-sm bg-gradient-to-tl from-slate-600 to-slate-300 h-9 w-9 rounded-xl">
                                                </div>
                                                <div class="flex flex-col justify-center">
                                                    <h6 class="mb-1 font-normal leading-normal text-sm">Payment successfully completed</h6>
                                                    <p class="mb-0 leading-tight text-xs text-slate-400">
                                                        <i class="mr-1 fa fa-clock"></i>
                                                        2 days
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;