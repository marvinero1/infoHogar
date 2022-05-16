

<?php $__env->startSection('content'); ?>
<div>
    <?php if($errors->any()): ?>
        <div class="alert alert-danger">
            <ul>
                <?php $__currentLoopData = $errors->all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $error): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <li><?php echo e($error); ?></li>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </ul>
        </div><br/>
    <?php endif; ?>
    
    <form action="<?php echo e(route('admin.inmueble.store')); ?>" method="POST" enctype="multipart/form-data">
        <?php echo e(csrf_field()); ?>

        <div class="row" style="border: outset;"><br>
            <div class="col-md-12 col-sm-12  form-group">
                <h3><strong>Crear Producto</strong></h3>
                <p><strong>Los campos (*) son obligatorios</strong></p>
            </div>

            <div class="col-md-12 col-sm-12" style="padding-block-end: 15px;">
                <div class="col-md-3 col-sm-3  form-group">
                    <label for="dormitorios">Dormitorios *</label>
                    <input type="number" class="form-control" name="dormitorios" placeholder="Dormitorios"
                        required>
                </div>

                <div class="col-md-3 col-sm-3  form-group">
                    <label for="nombre">Baños *</label>
                    <input type="number" class="form-control" name="banios" placeholder="Baños"
                        required>
                </div>

                <div class="col-md-3 col-sm-3  form-group">
                    <label for="garajes">Garajes *</label>
                    <input type="number" class="form-control" name="garajes" placeholder="Garajes"
                        required>
                </div>

                <div class="col-md-3 col-sm-3  form-group">
                    <label for="estado">Estado *</label>
                    <select id="estado" name="estado" class="form-control" required>
                        <option>Elige</option>
                        <option value="Venta">En Venta.</option>
                        <option value="Alquiler">Alquiler.</option>
                        <option value="Anticretico">Anticretico.</option>                       
                    </select>
                </div>
            </div>

            <div class="col-md-12 col-sm-12" style="padding-block-end: 7px;">
                <div class="col-md-3 col-sm-12 form-group">
                    <label for="categoria">Categoria</label>
                    <select id="categoria" name="categoria" class="form-control" required>
                        <option>Elige</option>
                        <option value="Accesorios Sujeción Techos">Accesorios Sujeción Techos.</option>
                        <option value="Agricultura">Agricultura.</option>
                        <option value="Arandelas Planas">Arandelas Planas.</option>
                        <option value="Brocas y Anclajes">Brocas y Anclajes.</option>
                        <option value="Cincados">Cincados.</option>
                        <option value="Fijación Placas de Yeso">Fijación Placas de Yeso.</option>
                    </select>
                </div>

                <div class="col-md-3 col-sm-12  form-group">
                    <label for="inox">Inoxidable</label>
                    <select id="inox" name="inox" class="form-control" required>
                        <option>Elige</option>
                        <option value="si">SI</option>
                        <option value="no">NO</option>
                    </select>
                </div>

                <div class="col-md-3 col-sm-12  form-group">
                   
                </div>

                <div class="col-md-3 col-sm-12  form-group">
                   
                </div>
            </div>

            
        </div><br><br>

        <div class="col-md-12 col-sm-12" style="padding-block-end: 7px;">
            <div class="col-md-4 col-sm-12  form-group">
                <label for="nombre">Material</label>
                <input type="text" class="form-control" name="material" placeholder="Material">
            </div>

            <div class="col-md-4 col-sm-12  form-group">
                <label for="nombre">Acabado</label>
                <input type="text" class="form-control" name="acabado" placeholder="Acabado">
            </div>

            <div class="col-md-4 col-sm-12  form-group">
                <label for="nombre">Rosca</label>
                <input type="text" class="form-control" name="rosca" placeholder="Rosca">
            </div>
        </div>

        <div class="col-md-12 col-sm-12" style="padding-block-end: 7px;">
            <div class="col-md-6 col-sm-12  form-group">
                <label for="nombre">Resistencia</label>
                <input type="text" class="form-control" name="resistencia" placeholder="Resistencia">
            </div>

            <div class="col-md-6 col-sm-12  form-group">
                <label for="nombre">Tratamiento</label>
                <input type="text" class="form-control" name="tratamiento" placeholder="Tratamiento">
            </div>
        </div>

        <div class="col-md-12 col-sm-12">
            <div class="col-md-4 col-sm-12 form-group">
                <label for="sae">Norma SAE</label>
                <select id="sae" name="sae" class="form-control">
                    <option>Elige</option>
                    <option value="si">SI</option>
                    <option value="no">NO</option>
                </select>
            </div>

            <div class="col-md-4 col-sm-12  form-group">
                <label for="zb">Zincado Blanco</label>
                <select id="zb" name="zb" class="form-control">
                    <option>Elige</option>
                    <option value="si">SI</option>
                    <option value="no">NO</option>
                </select>
            </div>

            <div class="col-md-4 col-sm-12  form-group">
                <label for="zam">Zincado Amarillo</label>
                <select id="zam" name="zam" class="form-control" required>
                    <option>Elige</option>
                    <option value="si">SI</option>
                    <option value="no">NO</option>
                </select>
            </div>
        </div>

        <div class="footer" style="padding: 15px 15px 5px 5px; float: right;">
            <a type="button" class="btn btn-warning float-right" href="<?php echo e(url('/admin/producto')); ?>" style="color: black">
                <i class="fa fas fa-arrow-left"></i> Cerrar</a>
            <button type="submit" class="btn btn-primary float-right mr-2"><i class="fa fas fa-save"></i>
                Guardar</button>
        </div>
    </form>
</div>

<style>
    input[type="file"]{
        display: none;
    }
    input {
        text-transform: uppercase !important;
    }
    .custom-file-upload {
        width: 100%;
        border: 1px solid #ccc;
        display: inline-block;
        padding: 6px 12px;
        cursor: pointer;
    }
</style>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('admin.layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\laragon\www\dfutr454drdf5gd5f8rt\resources\views/admin/inmuebles/create.blade.php ENDPATH**/ ?>