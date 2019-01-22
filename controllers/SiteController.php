<?php
/**
 * Контроллер CartController
 */
class SiteController
{
    /**
     * Action для главной страницы
     */
    public function actionIndex()
    {
        // Подключаем вид
        require_once(ROOT . '/views/index.php');
        return true;
    }


}
