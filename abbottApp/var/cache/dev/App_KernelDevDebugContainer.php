<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerTVVMmx6\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerTVVMmx6/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerTVVMmx6.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerTVVMmx6\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerTVVMmx6\App_KernelDevDebugContainer([
    'container.build_hash' => 'TVVMmx6',
    'container.build_id' => 'c0c240cb',
    'container.build_time' => 1584538903,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerTVVMmx6');
