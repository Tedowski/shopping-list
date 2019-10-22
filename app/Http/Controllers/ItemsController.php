<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ItemsController extends Controller
{
    public function index()
    {
        $array = ['Orange', 'Orange', 'Orange', 'Apple', 'Apple', 'Apple'];
        return $array;

        // return \App\Fruit::all();
    }
}
