import React from "react";
import "../../assets/css/nucleo-icons.css";
import "../../assets/css/nucleo-svg.css";
import "../../assets/css/argon-dashboard-tailwind.css?v=1.0.1";
import "../../assets/css/soft-ui-dashboard-tailwind.css?v=1.0.5";

import { Helmet } from "react-helmet";
import Footer from "../footer";

function AddUsers() {
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
            <div class="w-full px-6 py-6 mx-auto">
                <div class="flex flex-wrap mt-6 -mx-3">
                    <div class="w-full px-3 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
                        <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                            <div class="flex-auto p-4">
                                <div class="flex flex-wrap -mx-3">
                                    <div class="max-w-full px-3 lg:w-1/2 lg:flex-none">
                                        <div class="flex flex-col h-full">
                                            {/* <p class="pt-2 mb-1 font-semibold">Built by developers</p>
                                            <h5 class="font-bold">Soft UI Dashboard</h5>
                                            <p class="mb-12">From colors, cards, typography to complex elements, you will find the full documentation.</p>
                                            <a class="mt-auto mb-0 font-semibold leading-normal text-sm group text-slate-500" href="javascript:;">
                                                Read More
                                                <i class="fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"></i>
                                            </a> */}
                                            <form>
                                                <div class="mb-6">
                                                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
                                                    <input type="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
                                                </div>
                                                <div class="mb-6">
                                                    <label for="username" class="block mb-2 text-sm font-medium text-gray-900">Username</label>
                                                    <input type="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required />
                                                </div>
                                                <div class="mb-6">
                                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900">password</label>
                                                    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required />
                                                </div>
                                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                                                    Add
                                                </button>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default AddUsers;