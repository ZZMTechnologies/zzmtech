<?php

namespace App\Livewire\Pages;

use Livewire\Attributes\Layout;
use Livewire\Component;

class Contact extends Component
{
    #[Layout('layouts.landing')]
    public function render()
    {
        return view('livewire.pages.contact');
    }
}
