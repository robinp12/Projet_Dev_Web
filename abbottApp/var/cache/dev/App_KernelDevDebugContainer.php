<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerG1ezD2Q\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerG1ezD2Q/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerG1ezD2Q.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerG1ezD2Q\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerG1ezD2Q\App_KernelDevDebugContainer([
    'container.build_hash' => 'G1ezD2Q',
    'container.build_id' => '2958d9e1',
    'container.build_time' => 1587481862,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerG1ezD2Q');
