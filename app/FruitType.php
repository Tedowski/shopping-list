<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FruitType extends Model
{
    public function fruits()
    {
        return $this->hasMany(Fruit::class);
    }
}
