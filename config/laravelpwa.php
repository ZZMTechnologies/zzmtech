<?php

return [
    'name' => 'ZZMTech',
    'manifest' => [
        'name' => env('APP_NAME', 'ZZMTech'),
        'short_name' => 'ZZMTech',
        'start_url' => '/',
        'background_color' => '#ffffff',
        'theme_color' => '#000000',
        'display' => 'standalone',
        'orientation'=> 'any',
        'status_bar'=> 'black',
        'icons' => [
            '72x72' => [
                'path' => '/logo/icons/icon-72x72.png',
                    'type' => 'image/png',
                'purpose' => 'maskable any'
            ],
            '96x96' => [
                'path' => '/logo/icons/icon-96x96.png',
                    'type' => 'image/png',
                'purpose' => 'maskable any'
            ],
            '128x128' => [
                'path' => '/logo/icons/icon-128x128.png',
                    'type' => 'image/png',
                'purpose' => 'maskable any'
            ],
            '144x144' => [
                'path' => '/logo/icons/icon-144x144.png',
                    'type' => 'image/png',
                'purpose' => 'maskable any'
            ],
            '152x152' => [
                'path' => '/logo/icons/icon-152x152.png',
                    'type' => 'image/png',
                'purpose' => 'maskable any'
            ],
            '192x192' => [
                'path' => '/logo/icons/icon-192x192.png',
                    'type' => 'image/png',
                'purpose' => 'maskable any'
            ],
            '384x384' => [
                'path' => '/logo/icons/icon-384x384.png',
                    'type' => 'image/png',
                'purpose' => 'maskable any'
            ],
            '512x512' => [
                'path' => '/logo/icons/icon-512x512.png',
                    'type' => 'image/png',
                'purpose' => 'maskable any'
            ],
        ],
        'splash' => [
            '640x1136' => '/logo/icons/splash-640x1136.png',
            '750x1334' => '/logo/icons/splash-750x1334.png',
            '828x1792' => '/logo/icons/splash-828x1792.png',
            '1125x2436' => '/logo/icons/splash-1125x2436.png',
            '1242x2208' => '/logo/icons/splash-1242x2208.png',
            '1242x2688' => '/logo/icons/splash-1242x2688.png',
            '1536x2048' => '/logo/icons/splash-1536x2048.png',
            '1668x2224' => '/logo/icons/splash-1668x2224.png',
            '1668x2388' => '/logo/icons/splash-1668x2388.png',
            '2048x2732' => '/logo/icons/splash-2048x2732.png',
        ],
        // 'shortcuts' => [
        //     [
        //         'name' => 'Shortcut Link 1',
        //         'description' => 'Shortcut Link 1 Description',
        //         'url' => '/shortcutlink1',
        //         'icons' => [
        //             "src" => "/logo/icons/icon-72x72.png",
        //             "purpose" => "any"
        //         ]
        //     ],
        //     [
        //         'name' => 'Shortcut Link 2',
        //         'description' => 'Shortcut Link 2 Description',
        //         'url' => '/shortcutlink2'
        //     ]
        // ],
        'custom' => []
    ]
];
