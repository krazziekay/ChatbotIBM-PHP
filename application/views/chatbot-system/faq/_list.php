<form action="" method="post" id="gridForm" autocomplete="off">
    <table class="table table-bordered table-hover list-datatable">
    <tfoot id="table-search-row">
        <tr>
            <th></th>
            <th></th>
            <th>Questions</th>
            <th></th>
        </tr>
    </tfoot>
    <thead>
        <tr>
            <th>SN</th>
            <th><input type="checkbox" name="selectAll" value="selectAll" class="selectAll" /></th>
            <th>Questions</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
    <?php if ($faqs) : $serial_number = 1; ?>
        <?php foreach ($faqs as $row) : ?>
            <tr>
                <td><?php echo $serial_number; $serial_number++; ?></td>
                <td><input type="checkbox" name="selected[]" value="<?php echo $row->id; ?>" class="rowCheckBox" /></td>
                <td><?php echo $row->question ?></td>
                <td>
                    <?php
                    $this->data['actionBtnData'] = [
                        'module' => 'faq',
                        'moduleData' => $row,
                        'options' => 'EDS'
                    ];
                    $ci = &get_instance();
                    $ci->partialRender(BACKENDFOLDER.'/include/actionButton');
                    ?>
                </td>
            </tr>
        <?php endforeach ?>
    <?php else : ?>
        <tr>
            <td>No Data</td>
            <td>No Data</td>
            <td>No Data</td>
            <td>No Data</td>
        </tr>
    <?php endif; ?>
    </tbody>
</table>
</form>