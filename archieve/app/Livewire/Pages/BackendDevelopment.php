<?php

namespace App\Livewire\Pages;

use Livewire\Attributes\Layout;
use Livewire\Component;

class BackendDevelopment extends Component
{
    #[Layout('layouts.landing')]
    public function render()
    {
        return view('livewire.pages.backend-development');
    }
}
