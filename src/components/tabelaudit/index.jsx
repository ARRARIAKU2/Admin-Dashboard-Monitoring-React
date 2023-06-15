import React from "react";

import "../../assets/css/nucleo-icons.css";
import "../../assets/css/nucleo-svg.css";
import "../../assets/css/argon-dashboard-tailwind.css?v=1.0.1";
import "../../assets/css/soft-ui-dashboard-tailwind.css?v=1.0.5";

import { Helmet } from "react-helmet";
import Footer from "../footer";

function TabelAudit() {
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
                <div class="flex flex-wrap -mx-3">
                    <div class="flex-none w-full max-w-full px-3">
                        <div class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                            <div class="p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                                <h6>Audit Trail</h6>
                                <form class="flex items-center">
                                    <label for="simple-search" class="sr-only">Search</label>
                                    <div class="relative w-full">
                                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                        </div>
                                        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                                    </div>
                                    <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-black bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        <span class="sr-only">Search</span>
                                    </button>
                                </form>
                            </div>
                            <div class="flex-auto px-0 pt-0 pb-2">
                                <div class="p-0 overflow-x-auto">
                                    <table class="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                                        <thead class="align-bottom">
                                            <tr>
                                                <th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-lg border-b-solid tracking-none whitespace-nowrap text-slate-900 opacity-100">No. </th>
                                                <th class="px-6 py-3 pl-2 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-lg border-b-solid tracking-none whitespace-nowrap text-slate-900 opacity-100">Username</th>
                                                <th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-lg border-b-solid tracking-none whitespace-nowrap text-slate-900 opacity-100">Date & Time</th>
                                                <th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-lg border-b-solid tracking-none whitespace-nowrap text-slate-900 opacity-100">Activity</th>
                                                <th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-lg border-b-solid tracking-none whitespace-nowrap text-slate-900 opacity-100">Object</th>
                                                <th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-lg border-b-solid tracking-none whitespace-nowrap text-slate-900 opacity-100">Object ID</th>
                                                <th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-lg border-b-solid tracking-none whitespace-nowrap text-slate-900 opacity-100">Data Before</th>
                                                <th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-lg border-b-solid tracking-none whitespace-nowrap text-slate-900 opacity-100">Data After</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <span class="text-base font-semibold leading-tight text-slate-900">1</span>
                                                </td>
                                                <td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <span class="text-base font-semibold leading-tight text-slate-900">nasrul123</span>
                                                </td>
                                                <td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <span class="text-base font-semibold leading-tight text-slate-900">23/04/18</span>
                                                </td>
                                                <td class="p-2 text-base leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <span class="bg-gradient-to-tl from-green-600 to-lime-400 px-2.5 text-base rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Create</span>
                                                </td>
                                                <td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <span class="text-base font-semibold leading-tight text-slate-900">User</span>
                                                </td>
                                                <td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <span class="text-base font-semibold leading-tight text-slate-900">UserID</span>
                                                </td>
                                                <td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <span class="text-base font-semibold leading-tight text-slate-900">Rassya</span>
                                                </td>
                                                <td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <span class="text-base font-semibold leading-tight text-slate-900">Raffasya</span>
                                                </td>
                                            </tr>
                                            {/* <tr>
                                                <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <div class="flex px-2 py-1">
                                                        <div>
                                                        </div>
                                                        <div class="flex flex-col justify-center">
                                                            <h6 class="mb-0 text-sm leading-normal">Alexa Liras</h6>
                                                            <p class="mb-0 text-xs leading-tight text-slate-400">alexa@creative-tim.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <p class="mb-0 text-xs font-semibold leading-tight">Programator</p>
                                                    <p class="mb-0 text-xs leading-tight text-slate-400">Developer</p>
                                                </td>
                                                <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <span class="bg-gradient-to-tl from-slate-600 to-slate-300 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Offline</span>
                                                </td>
                                                <td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <span class="text-xs font-semibold leading-tight text-slate-400">11/01/19</span>
                                                </td>
                                                <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <a href="javascript:;" class="text-xs font-semibold leading-tight text-slate-400"> Edit </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <div class="flex px-2 py-1">
                                                        <div>
                                                        </div>
                                                        <div class="flex flex-col justify-center">
                                                            <h6 class="mb-0 text-sm leading-normal">Laurent Perrier</h6>
                                                            <p class="mb-0 text-xs leading-tight text-slate-400">laurent@creative-tim.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <p class="mb-0 text-xs font-semibold leading-tight">Executive</p>
                                                    <p class="mb-0 text-xs leading-tight text-slate-400">Projects</p>
                                                </td>
                                                <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <span class="bg-gradient-to-tl from-green-600 to-lime-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Online</span>
                                                </td>
                                                <td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <span class="text-xs font-semibold leading-tight text-slate-400">19/09/17</span>
                                                </td>
                                                <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <a href="javascript:;" class="text-xs font-semibold leading-tight text-slate-400"> Edit </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <div class="flex px-2 py-1">
                                                        <div>
                                                        </div>
                                                        <div class="flex flex-col justify-center">
                                                            <h6 class="mb-0 text-sm leading-normal">Michael Levi</h6>
                                                            <p class="mb-0 text-xs leading-tight text-slate-400">michael@creative-tim.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <p class="mb-0 text-xs font-semibold leading-tight">Programator</p>
                                                    <p class="mb-0 text-xs leading-tight text-slate-400">Developer</p>
                                                </td>
                                                <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <span class="bg-gradient-to-tl from-green-600 to-lime-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Online</span>
                                                </td>
                                                <td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <span class="text-xs font-semibold leading-tight text-slate-400">24/12/08</span>
                                                </td>
                                                <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <a href="javascript:;" class="text-xs font-semibold leading-tight text-slate-400"> Edit </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <div class="flex px-2 py-1">
                                                        <div>
                                                        </div>
                                                        <div class="flex flex-col justify-center">
                                                            <h6 class="mb-0 text-sm leading-normal">Richard Gran</h6>
                                                            <p class="mb-0 text-xs leading-tight text-slate-400">richard@creative-tim.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <p class="mb-0 text-xs font-semibold leading-tight">Manager</p>
                                                    <p class="mb-0 text-xs leading-tight text-slate-400">Executive</p>
                                                </td>
                                                <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <span class="bg-gradient-to-tl from-slate-600 to-slate-300 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Offline</span>
                                                </td>
                                                <td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <span class="text-xs font-semibold leading-tight text-slate-400">04/10/21</span>
                                                </td>
                                                <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <a href="javascript:;" class="text-xs font-semibold leading-tight text-slate-400"> Edit </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                    <div class="flex px-2 py-1">
                                                        <div>
                                                        </div>
                                                        <div class="flex flex-col justify-center">
                                                            <h6 class="mb-0 text-sm leading-normal">Miriam Eric</h6>
                                                            <p class="mb-0 text-xs leading-tight text-slate-400">miriam@creative-tim.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                    <p class="mb-0 text-xs font-semibold leading-tight">Programtor</p>
                                                    <p class="mb-0 text-xs leading-tight text-slate-400">Developer</p>
                                                </td>
                                                <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                    <span class="bg-gradient-to-tl from-slate-600 to-slate-300 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Offline</span>
                                                </td>
                                                <td class="p-2 text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                    <span class="text-xs font-semibold leading-tight text-slate-400">14/09/20</span>
                                                </td>
                                                <td class="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                    <a href="javascript:;" class="text-xs font-semibold leading-tight text-slate-400"> Edit </a>
                                                </td>
                                            </tr> */}
                                        </tbody>
                                    </table>
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

export default TabelAudit;