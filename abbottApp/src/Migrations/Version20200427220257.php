<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200427220257 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE participant DROP FOREIGN KEY FK_D79F6B1171F7E88B');
        $this->addSql('DROP INDEX IDX_D79F6B1171F7E88B ON participant');
        $this->addSql('ALTER TABLE participant CHANGE event_id conference_id INT NOT NULL');
        $this->addSql('ALTER TABLE participant ADD CONSTRAINT FK_D79F6B11604B8382 FOREIGN KEY (conference_id) REFERENCES conference (id)');
        $this->addSql('CREATE INDEX IDX_D79F6B11604B8382 ON participant (conference_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE participant DROP FOREIGN KEY FK_D79F6B11604B8382');
        $this->addSql('DROP INDEX IDX_D79F6B11604B8382 ON participant');
        $this->addSql('ALTER TABLE participant CHANGE conference_id event_id INT NOT NULL');
        $this->addSql('ALTER TABLE participant ADD CONSTRAINT FK_D79F6B1171F7E88B FOREIGN KEY (event_id) REFERENCES event (id)');
        $this->addSql('CREATE INDEX IDX_D79F6B1171F7E88B ON participant (event_id)');
    }
}
