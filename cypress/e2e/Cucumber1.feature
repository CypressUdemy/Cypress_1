Feature: Demo de cucumber uno

    Esto es un demo de como utilzar cucumber

    # Scenario: Test de Cucumber uno
    #     Given abrir el navegador principal
    #     When cargando el nombre catalina
    #     When cargando el email cata@gmail.com
    #     When cargando la direccion
    #     When cargando la direccion2 calvario
    #     Then click en boton


    # Scenario: Test de Cucumber dos
    #     Given abrir el navegador principal
    #     When cargando el nombre daniela
    #     When cargando el email danidani@gmail.com
    #     When cargando la direccion
    #     When cargando la direccion2 nazarenosss
    #     Then click en boton

     Scenario Outline: Scenario Outline name: Test de Cucumber uno
        Given abrir el navegador principal
        When cargando el nombre <username> 
        When cargando el email <email>
        When cargando la direccion <dir1>
        When cargando la direccion2 <dir2>
        Then click en boton

        Examples:
            | username | email | dir1 | dir2
            | juan  | juanchi@gmail.com  | cojedes | altos
            | maria  | maria@gmail.com  | miranda | altos
            | trina  | tritri@gmail.com  | cojedes | altos
            | carla  | juanchi@gmail.com  | amaco | guatire