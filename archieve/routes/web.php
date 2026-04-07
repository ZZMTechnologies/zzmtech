<?php

use App\Livewire\Pages\AboutUs;
use App\Livewire\Pages\Accreditation;
use App\Livewire\Pages\ApiDevelopment;
use App\Livewire\Pages\ArtificialIntelligence;
use App\Livewire\Pages\BackendDevelopment;
use App\Livewire\Pages\BlockchainDevelopment;
use App\Livewire\Pages\CaseStudy;
use App\Livewire\Pages\CloudComputing;
use App\Livewire\Pages\Contact;
use App\Livewire\Pages\Cybersecurity;
use App\Livewire\Pages\DevSecOps;
use App\Livewire\Pages\DigitalConsultancy;
use App\Livewire\Pages\FrontendDevelopment;
use App\Livewire\Pages\Home;
use App\Livewire\Pages\InternetOfThings;
use App\Livewire\Pages\Microservice;
use App\Livewire\Pages\MobileDevelopment;
use App\Livewire\Pages\OurClient;
use App\Livewire\Pages\Project;
use App\Livewire\Pages\Publication;
use App\Livewire\Pages\Team;
use App\Livewire\Pages\Testimonial;
use App\Livewire\Pages\WebDevelopment;
use App\Livewire\Pages\WorkMethodology;
use Illuminate\Support\Facades\Route;

// About
Route::get('/', Home::class);
Route::get('/aboutus', AboutUs::class);
Route::get('/team', Team::class);
Route::get('/ourclient', OurClient::class);
Route::get('/accreditation', Accreditation::class);
Route::get('/testimonial', Testimonial::class);
// Services
Route::get('/digitalconsultancy', DigitalConsultancy::class);
Route::get('/web', WebDevelopment::class);
Route::get('/backend', BackendDevelopment::class);
Route::get('/frontend', FrontendDevelopment::class);
Route::get('/api', ApiDevelopment::class);
Route::get('/mobile', MobileDevelopment::class);
Route::get('/blockchain', BlockchainDevelopment::class);
Route::get('/cloudcomputing', CloudComputing::class);
Route::get('/cybersecurity', Cybersecurity::class);
Route::get('/devsecops', DevSecOps::class);
Route::get('/ai', ArtificialIntelligence::class);
Route::get('/iot', InternetOfThings::class);
Route::get('/microservice', Microservice::class);
// Portfolio
Route::get('/workmethodology', WorkMethodology::class);
Route::get('/casestudy', CaseStudy::class);
Route::get('/project', Project::class);
Route::get('/publication', Publication::class);
// Contact
Route::get('/contact', Contact::class);

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});
