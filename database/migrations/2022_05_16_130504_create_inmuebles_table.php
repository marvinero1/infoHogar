<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInmueblesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inmuebles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('dormitorios');
            $table->integer('banios');
            $table->integer('garajes');
            $table->double('precio', 6,2);
            $table->double('superficie_terreno', 6,2);
            $table->double('superficie_construido', 6,2);
            $table->string('ciudad');
            $table->enum('estado', ['vendido','en venta','alquiler','anticretico']);
            $table->enum('tipo', ['casa','chalet','dpto','lote', 'garaje']);
            $table->enum('zona', ['norte','sud','este','oeste']);
            $table->string('direccion');
            $table->string('lat');
            $table->string('log');
            $table->string('descripcion', 550);

            $table->string('cajoneria')->nullable();
            $table->string('comedor')->nullable();
            $table->string('despensa')->nullable();
            $table->string('escritorio')->nullable();
            $table->string('gas_domiciliario')->nullable();
            $table->string('lavanderia')->nullable();
            $table->string('living_comedor')->nullable();
            $table->string('patio')->nullable();
            $table->string('roperos_empotrados')->nullable();
            $table->string('tienda')->nullable();
            $table->string('servicios_basicos')->nullable();


            $table->unsignedBigInteger('image_id')->unsigned();
            $table->foreign('image_id')
            ->references('id')->on('images')
            ->onDelete('cascade');

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('inmuebles');
    }
}
