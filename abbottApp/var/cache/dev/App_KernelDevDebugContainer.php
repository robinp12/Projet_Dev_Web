<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\Container3tgDW9d\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/Container3tgDW9d/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/Container3tgDW9d.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\Container3tgDW9d\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \Container3tgDW9d\App_KernelDevDebugContainer([
    'container.build_hash' => '3tgDW9d',
    'container.build_id' => 'b57f5369',
    'container.build_time' => 1588097450,
], __DIR__.\DIRECTORY_SEPARATOR.'Container3tgDW9d');
