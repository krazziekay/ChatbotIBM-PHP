<aside class="main-sidebar">
    <section class="sidebar">
        <div class="user-panel">
            <div class="pull-left image">
                <img src="<?php echo base_url('assets/'.BACKENDFOLDER.'//img/default-user.png') ?>" class="img-circle" alt="<?php echo get_userdata('name') ?>" />
            </div>
            <div class="pull-left info">
                <p><?php echo get_userdata('name') ?></p>

                <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
            </div>
        </div>
        <ul class="sidebar-menu">
            <li class="header">MAIN NAVIGATION</li>
            <li<?php echo segment(2) == 'dashboard' ? ' class="active"' : '' ?>>
                <a href="<?php echo base_url(BACKENDFOLDER.'/dashboard') ?>">
                    <i class="fa fa-dashboard"></i> <span>Dashboard</span>
                </a>
            </li>
            <?php if($user_id == 1){?>
                <li class="treeview active">
                    <a href="#">
                        <i class="fa fa-cogs"></i><span>Settings</span>
                        <i class="fa fa-angle-left pull-right"></i>
                    </a>
                    <ul class="treeview-menu">
                        <li>
                            <a href="<?php echo base_url(BACKENDFOLDER.'/role') ?>">
                                <i class="fa fa-circle-o"></i> Role Manager
                            </a>
                        </li>
                        <li class="active">
                            <a href="<?php echo base_url(BACKENDFOLDER.'/rolemodule')?>">
                                <i class="fa fa-circle-o"></i> Role Module Manager
                            </a>
                        </li>
                        <li>
                            <a href="<?php echo base_url(BACKENDFOLDER.'/user')?>">
                                <i class="fa fa-circle-o"></i> Users
                            </a>
                        </li>
                    </ul>
                </li>
            <?php }?>
            <li>
                <a href="<?php echo base_url(BACKENDFOLDER.'/category')?>">
                    <i class="fa fa-cogs"></i> <span>Keywords</span>
                </a>
            </li>
            <li>
                <a href="<?php echo base_url(BACKENDFOLDER.'/faq')?>">
                    <i class="fa fa-files-o"></i> <span>FAQ</span>
                </a>
            </li>
            <li>
                <a href="<?php echo base_url(BACKENDFOLDER.'/faq/unanswered')?>">
                    <i class="fa fa-files-o"></i> <span>Unanswered Questions</span>
                </a>
            </li>
            <li>
                <a href="<?php echo base_url(BACKENDFOLDER.'/logout') ?>">
                    <i class="fa fa-sign-out"></i> <span>Sign Out</span>
                </a>
            </li>
        </ul>
    </section>
</aside>