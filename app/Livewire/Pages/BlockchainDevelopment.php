<?php

namespace App\Livewire\Pages;

use Livewire\Attributes\Layout;
use Livewire\Component;

class BlockchainDevelopment extends Component
{
    #[Layout('layouts.landing')]
    public function render()
    {
        return view('livewire.pages.blockchain-development');
    }
}
