<?php

namespace App\DataFixtures;

use App\Entity\Conference;
use App\Entity\User;
use DateTime;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Faker\Factory;
use Faker\Provider\Lorem;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{
    /**
     * Encode password
     *
     * @var UserPasswordEncoderInterface
     */
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        $faker = Factory::create('fr_BE');

        $user = new User();
        $hash = $this->encoder->encodePassword($user, 'password');
        $user->setEmail("simon.mohimont@hotmail.com");
        $user->setPassword($hash);
        $user->setLastName("robin");
        $user->setFirstName("robin");
        $user->setIsAccepted(true);
        $manager->persist($user);

        for($e=0;$e<10;$e++){
            $conference = new Conference();
            $conference->setName("Conference $faker->firstname")
            ->setHourStart(new DateTime())
            ->setDescription($faker->text());
            $manager->persist($conference);
        }
        $manager->flush();
    }
}
