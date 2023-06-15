import React from "react";
import { Helmet } from "react-helmet";

import "../../assets/css/nucleo-icons.css";
import "../../assets/css/nucleo-svg.css";
import "../../assets/css/argon-dashboard-tailwind.css?v=1.0.1";
import "../../assets/css/soft-ui-dashboard-tailwind.css?v=1.0.5";

function Footer() {
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
            <footer class="pt-4">
                <div class="w-full px-6 mx-auto">
                    <div class="flex flex-wrap items-center -mx-3 lg:justify-between">
                        <div class="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
                            <div class="text-sm leading-normal text-center text-slate-500 lg:text-left">
                                © 2023, Portal TRO BRI.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;