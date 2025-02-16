<?php

namespace App\Livewire\Pages;

use Livewire\Attributes\Layout;
use Livewire\Component;

class CaseStudy extends Component
{
    #[Layout('layouts.landing')]
    public function render()
    {
        return view('livewire.pages.case-study');
    }
}
