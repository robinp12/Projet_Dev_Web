<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Faker\Factory;
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
        $user->setLastname("Mohimont");
        $user->setFirstname("Simon");
        $user->setEmail("simon.mohimont@hotmail.com");
        $user->setPassword($hash);
        $manager->persist($user);

        $manager->flush();
    }
}
