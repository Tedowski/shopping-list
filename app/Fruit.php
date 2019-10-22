<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fruit extends Model
{
    public function type()
    {
        return $this->belongsTo(FruitType::class);
    }
}
