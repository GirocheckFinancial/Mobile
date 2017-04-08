Ext.define('GirocheckMobile.i18n.locales.defaultLocale', {
  login: {
    username: 'Usuario',
    password: 'Contraseña',
    forgotPassword: '¿Olvidó Contraseña?',
    login: 'Entrar',
    register: 'Registrarse',
    invalidCredentials: 'Credenciales Incorrectas'
  },
  register: {
    title: 'Registrar',
    credentials: 'Credenciales',
    username: 'Usuario',
    usernameHint: 'Entre su usuario',
    usernameRegexHint: 'Usuario tiene que contener al menos 6 caracteres.',
    retypePassword: 'Repita la contraseña',
    personalInformation: 'Información Personal',
    telephone: 'Teléfono',
    telephoneHint: 'Entre el teléfono que uso cuando registró <br> VoltCash, sin guiones.',
    telephoneRegexHint: 'Entre solo dígitos',
    email: 'Correo Electrónico',
    emailHint: 'Entre su correo electrónico. <br> Este sera usado para recuperar su contraseña',
    emailRegexHint: 'Inválido correo electrónico',
    ssn: 'Seguro Social / ITIN',
    ssnHint: 'Entre el número de seguridad social o ITIN <br> usado al registrar VoltCash.',
    ssnRegexHint: 'Entre solo dígitos',
    creditCard: 'Tarjeta de Crédito',
    iAcceptThe: 'Yo acepto los',
    termsAndConditions: 'Términos y Condiciones',
    register: 'Registrar'
  },
  termsAndConditions: {
    title: 'Términos y Condiciones',
    text: 'La tarjeta prepagada VoltCash es emitida por Metabank®, Miembro FDIC, conforme a la licencia de Mastercard International Incorporated.<br><br>' +
    'Para leer todos los Términos y Condiciones aplicable al uso de su tarjeta y el uso de esta aplicación, haga click <a href="http://www.voltcash.com/tcs">aqui</a> y le sera mostrado dentro del navegador de su dispositivo.<br><br>' +
    'Si no puede acceder a Internet, por favor diríjase a Atención al Cliente marcando 1-800-249-3042, opción 4 para Soporte Técnico.<br><br>' +
    'Estándar costos de datos, inpuestos, y otros cargos pueden ser aplicados.',
    youNeedToAccept: 'Nuestros Términos y Condiciones tienen que ser aceptados'
  },
  forgotPassword: {
    title: '¿Olvidó Contraseña?',
    header: '<h3>Nosotros le ayudaremos<h3><br>' +
    '<span>Por favor entre la siguiente información, para poder identificar su cuenta,' +
    ' y enviarle el Código de Acceso por Correo Electrónico o mensaje SMS, que podrá ser usado para loguearse' +
    ' y resetear su contraseña.</span>',
    ssn: 'Ultimos 4 dígitos de su número SSN o ITIN',
    ssnHint: 'Entre los últimos 4 dígitos de <br> su número de Seguro Social o ITIN <br> usados al registrar VoltCash.',
    ssnRegexHint: 'Entre 4 digitos',
    reciveBy: 'Recibir Código de Acceso por:',
    email: 'Correo',
    sms: 'Mensaje SMS',
    weJustSent: 'Se le ha enviado un Código de Acceso de 6 digitos.' +
    ' Puede acceder con dicho código por los próximos 30 minutos.',
    securityCode: 'Código de Acceso',
    resetPassword: "Resetear Contraseña",
    retypePassword: 'Repetir Contraseña',
    sendmeAccessCode: 'Recibir Código de Acceso',
    invalidAccessCode: ' Código de Acceso no válido'
  },
  home: {
    availableBalance: 'Balance Disponible',
    completedTransactions: 'TRANSACCIONES COMPLETADAS'
  },
  contact: {
    title: 'Contacto',
    phone: 'Teléfono',
    email: 'Correo Electrónico',
    website: 'Sitio Web',
    address: 'Dirección'
  },
  faq: {
    title: 'Preguntas',
    comingSoon: 'Disponible Pronto'
  },
  profile: {
    title: 'Perfil',
    personalInformation: 'Información Personal',
    username: 'Usuario',
    usernameHint: 'Este es su usuario',
    telephone: 'Teléfono',
    telephoneHint: 'Entre su número de teléfono.',
    telephoneRegexHint: 'Entre solo dígitos',
    email: 'Correo Electrónico',
    emailHint: 'Entre su correo electrónico. <br> Este sera usado para recuperar su contraseña',
    emailRegexHint: 'Inválido correo electrónico',
    changePassword: 'Cambiar Contraseña',
    previousPassword: 'Antigua Contraseña',
    previousPasswordHint: 'Por favor entre su antigua contraseña.',
    retypePassword: 'Verfique su contraseña',
    accept: 'Aceptar',
    yourProfileHasBeenReplaced: 'Su perfil ha sido actualizado'
  },
  replaceCard: {
    title: 'Reemplazar Tarjeta',
    newCardNumber: 'Nueva Tarjeta',
    accept: 'Aceptar',
    yourCardHasBeenReplaced: 'Su tarjeta ha sido reemplazada'
  },
  txlist: {
    emptyText: 'No resultados encontrados',
    noMoreRecordsText: 'No más resultados',
    pullText: 'Desplace hacia abajo para recargar',
    loadingText: 'Buscando...<br>Esto puede tomar hasta 1 minuto.',
  },
  navigationView: {
    back: 'Atrás'
  },
  mainMenu: {
    logout: 'Salir',
    legal: 'Legal'
  },
  field: {
    requiredField: 'Campo Requerido',
    enterAtLeast: 'Entre al menos ',
    characters: ' caracteres'
  },
  cardField: {
    card: 'Número de Tarjeta',
    cardHint: 'Entre su nuevo número de tarjeta Volt Cash.',
    cardRegexHint: 'El número de tarjeta tiene que contener 16 dígitos.'
  },
  passwordField: {
    password: 'Contraseña',
    passwordHint: 'Contraseña tiene que contener al menos una <br>letra mayúscula y un número <br> y contener al menos 8 caracteres.',
    passwordRegexHint: "Contraseñas no coinciden"
  },
  utils: {
    from: 'Desde ',
    to: ' hasta '
  },
  periodPicker: {
    selectPeriod: 'Seleccione Período',
    from: 'Desde:',
    to: 'Hasta:',
    accept: 'Aceptar',
    cancel: 'Cancelar',
    requiredValue: 'Campo requerido',
    incorrect: 'Rango de fechas incorrecto',
    lessThan1Month: 'Rango de fechas debe ser menos de un mes'
  }
});

// é, á, í, ó, ú, ñ