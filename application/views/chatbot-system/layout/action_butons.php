<?php
$url = $this->uri->segment_array();
$count = count($url);

if ($count == 2 || $count == 3) {
    if (isset($this->header['page_name']) && $this->header['page_name'] == 'subscription') { ?>
        <a href="javascript:void(0);" rel="<?php echo base_url(BACKENDFOLDER . '/' . segment(2) . '/send_mail') ?>"
           class="btn btn-success btn-xs mailIcon">
            <i class="fa fa-plus fa-fw"></i>Send Mail
        </a>
    <?php } ?>
    <?php if ($show_add_link) {
        $roleId = get_userdata('role_id');
        // all access to superadmin
        if ($this->header['page_name'] == 'dynamic_form') {
            if ($roleId == '1') {
                ?>
                <a href="javascript:void(0);" rel="<?php echo base_url(BACKENDFOLDER . '/form_fields/index/') ?>"
                   class="btn btn-success btn-xs structureIcon">
                    <i class="fa fa-film fa-fw"></i>Structure
                </a>
            <?php } ?>
            <a href="javascript:void(0);" rel="<?php echo base_url(BACKENDFOLDER . '/form_controller/') ?>"
               class="btn btn-success btn-xs dataIcon">
                <i class="fa fa-database fa-fw"></i>Data
            </a>
            <?php
        }

        if ($activeModulePermission['add']) {
            $hrefUrl = base_url(BACKENDFOLDER . '/' . segment(2) . '/create');
            $activeStatusUrl = base_url(BACKENDFOLDER . '/' . segment(2) . '/status/InActive');
            $inactiveStatusUrl = base_url(BACKENDFOLDER . '/' . segment(2) . '/status/Active');
            $deleteUrl = '';
            $backUrl = '';
            ?>
            <?php if ($this->header['page_name'] != 'role' && $this->header['page_name'] != 'module' && $this->header['page_name'] != 'user' && $this->header['page_name'] != 'form_fields' && $this->header['page_name'] != 'form_data') { ?>
                <a href="javascript:void(0);" rel="<?php echo $activeStatusUrl ?>" class="btn btn-success btn-xs"
                   id="activeIcon">
                    <i class="fa fa-circle fa-fw"></i> Active
                </a>
                <a href="javascript:void(0);" rel="<?php echo $inactiveStatusUrl ?>" class="btn btn-info btn-xs"
                   id="inactiveIcon">
                    <i class="fa fa-circle-o fa-fw"></i> Inactive
                </a>
            <?php } ?>
            <?php if ($this->header['page_name'] != 'role' && $this->header['page_name'] != 'user' && $this->header['page_name'] != 'form_data') { ?>
                
            <?php } ?>
        <?php }
        if ($activeModulePermission['delete']) {
        $deleteUrl = base_url(BACKENDFOLDER . '/' . segment(2) . '/delete');?>
        <a href="javascript:void(0);" rel="<?php echo $deleteUrl ?>" class="btn btn-danger btn-xs"
                   id="deleteIcon">
                    <i class="fa fa-trash fa-fw"></i>
                </a>
       <?php }
    }

    ?>

    <?php if ($show_sort_link) {
        if ($activeModulePermission['edit']) { ?>
            <a href="<?php echo base_url(BACKENDFOLDER . '/' . segment(2) . '/sort') ?>" data-toggle="ajaxModal"
               class="btn btn-info btn-xs">
                <i class="fa fa-sort fa-fw"></i> Sort
            </a>
        <?php }
    }
    ?>
    <?php if (!empty($backUrl)) { ?>
        <a href="<?php echo $backUrl ?>" class="btn btn-success btn-xs">
            <i class="fa fa-backward fa-fw"></i>
        </a>
    <?php } ?>
<?php } ?>
<?php if(isset($this->header['page_name']) && $this->header['page_name'] == 'role') { ?>
    <a title="Permission" href="<?php echo base_url(BACKENDFOLDER . '/rolemodule/') ?>" class="btn btn-primary btn-xs permissionIcon">
        <i class="fa fa-user-plus fa-fw"></i>
    </a>
<?php } ?>
