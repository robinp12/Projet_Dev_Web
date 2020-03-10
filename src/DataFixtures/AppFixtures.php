<?php

namespace App\DataFixtures;

use App\Entity\Conference;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Faker\Factory;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = Factory::create('fr_BE');

       for($i =0; $i<10 ; $i++){
           $conf = new Conference();
           $conf->setName($faker->city);
           $conf->setDescription($faker->text);
           $conf->setHourStart(new \DateTime());
           $manager->persist($conf);
       }

        $manager->flush();
    }
}
