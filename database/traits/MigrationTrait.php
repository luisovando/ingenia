<?php

/**
 * Created by PhpStorm.
 * User: Desarrollo
 * Date: 09/06/2016
 * Time: 06:31 PM
 */
trait MigrationTrait
{

    public function truncateTables(array $tables = [ ])
    {
        $tables = $this->selectTruncateTables($tables);
        $this->checkForeignKeys();
        foreach ($tables as $table) {
            if ($table === 'migrations') {
                continue;
            }
            DB::table($table)->truncate();
        }
        $this->checkForeignKeys(false);
    }


    /**
     * @param array $tables
     *
     * @return array
     */
    public function selectTruncateTables(array $tables)
    {
        if (empty( $tables )) {
            $tables = Schema::getConnection()->getDoctrineSchemaManager()->listTableNames();

            return $tables;
        }

        return $tables;
    }


    public function checkForeignKeys($check = true)
    {
        $check = $check ? '0' : '1';
        DB::statement("SET FOREIGN_KEY_CHECKS = $check;");
    }
}