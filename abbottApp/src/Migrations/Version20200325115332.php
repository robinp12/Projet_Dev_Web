<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200325115332 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE invoice DROP FOREIGN KEY FK_90651744F17767EC');
        $this->addSql('DROP INDEX IDX_90651744F17767EC ON invoice');
        $this->addSql('ALTER TABLE invoice CHANGE customer_lien customer_lien_id INT NOT NULL');
        $this->addSql('ALTER TABLE invoice ADD CONSTRAINT FK_90651744F17767EC FOREIGN KEY (customer_lien_id) REFERENCES customer (id)');
        $this->addSql('CREATE INDEX IDX_90651744F17767EC ON invoice (customer_lien_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE user');
        $this->addSql('ALTER TABLE invoice DROP FOREIGN KEY FK_90651744F17767EC');
        $this->addSql('DROP INDEX IDX_90651744F17767EC ON invoice');
        $this->addSql('ALTER TABLE invoice CHANGE customer_lien_id customer_lien INT NOT NULL');
        $this->addSql('ALTER TABLE invoice ADD CONSTRAINT FK_90651744F17767EC FOREIGN KEY (customer_lien) REFERENCES customer (id)');
        $this->addSql('CREATE INDEX IDX_90651744F17767EC ON invoice (customer_lien)');
    }
}
