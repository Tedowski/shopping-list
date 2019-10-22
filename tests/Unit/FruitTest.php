<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class FruitTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testFruits()
    {
        $this->get('/items')
            ->seeJsonStructure([
                '*' => [
                    'id', 'type'
                ]
            ]);
    }
}
