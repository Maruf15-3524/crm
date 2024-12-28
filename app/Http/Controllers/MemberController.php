<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class MemberController extends Controller
{
    public function showModal()
    {
        return Inertia::render('AddModal'); // Name of the React component
    }
}
