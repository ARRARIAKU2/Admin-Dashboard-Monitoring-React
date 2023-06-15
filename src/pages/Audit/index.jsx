import React from "react";
import { Helmet } from "react-helmet";
import "../../assets/css/nucleo-icons.css";
import "../../assets/css/nucleo-svg.css";
import "../../assets/css/argon-dashboard-tailwind.css?v=1.0.1";
import "../../assets/css/soft-ui-dashboard-tailwind.css?v=1.0.5";

import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import TabelAudit from "../../components/tabelaudit";

function Home() {
    return (
        <>
            <Helmet>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Portal TRO | Audit Trail</title>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
                <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
                <link href="../../assets/css/nucleo-icons.css" rel="stylesheet" />
                <link href="../../assets/css/nucleo-svg.css" rel="stylesheet" />
                <script src="https://unpkg.com/@popperjs/core@2"></script>
                <link href="../../assets/css/soft-ui-dashboard-tailwind.css?v=1.0.5" rel="stylesheet" />
                <script defer data-site="YOUR_DOMAIN_HERE" src="https://api.nepcha.com/js/nepcha-analytics.js"></script>
            </Helmet>
            <body className="m-0 font-sans text-base antialiased font-normal dark:bg-slate-900 leading-default bg-gray-50 text-slate-500">
                {/* <div className="absolute w-full bg-blue-500 dark:hidden min-h-75"></div> */}
                <Sidebar />

                <main class="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
                    <Navbar />
                    <TabelAudit />
                </main>
            </body>
            
            {/* <Navbar /> */}
            {/* <script src="../../assets/js/plugins/chartjs.min.js" async></script>
            <script src="../../assets/js/plugins/perfect-scrollbar.min.js" async></script>
            <script src="../../assets/js/argon-dashboard-tailwind.js?v=1.0.1" async></script> */}
        </>
    )
}

export default Home;