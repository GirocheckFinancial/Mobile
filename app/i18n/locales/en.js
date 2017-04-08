Ext.define('GirocheckMobile.i18n.locales.en', {
    extend: 'GirocheckMobile.i18n.locales.defaultLocale',
    login: {
        username: 'Username',
        password: 'Password',
        forgotPassword: 'Forgot Password',
        login: 'Login',
        register: 'Register',
        invalidCredentials: 'Invalid Credentials'
    },
    register: {
        title: 'Register',
        credentials: 'Credentials',
        username: 'Username',
        usernameHint: 'Enter your Username',
        usernameRegexHint: 'Username must to contain letters and numbers and have at least 6 characters.',
        retypePassword: 'Retype Password',
        personalInformation: 'Personal Information',
        telephone: 'Telephone',
        telephoneHint: 'Enter telephone number used when registering <br> VoltCash, with no dashes.',
        telephoneRegexHint: 'Enter just digits',
        email: 'Email',
        emailHint: 'Enter your e-mail address. <br> This will be used for password recovery',
        emailRegexHint: 'Invalid email format',
        ssn: 'SSN / ITIN',
        ssnHint: 'Enter your Social Security Number or ITIN <br> used when registering VoltCash.',
        ssnRegexHint: 'Enter just digits',
        creditCard: 'Credit Card',
        iAcceptThe: 'I accept the',
        termsAndConditions: 'Terms and Conditions',
        register: 'Register'
    },
    termsAndConditions: {
        title: 'Terms And Conditions',
        text: 'The VoltCash Prepaid Mastercard is issued by Metabank®, Member FDIC, pursuant to license by Mastercard International Incorporated.<br><br>' +
        'For the complete Terms and Conditions applicable to the use of your card and your use of this App, tap <a href="http://www.voltcash.com/tcs">here</a> to be displayed within your mobile browser.<br><br>' +
        'If you are unable to access the Internet, please contact customer service at 1-800-249-3042, option 4 for technical support.<br><br>' +
        'Standard data rates, fees, and charges may apply.',
        youNeedToAccept: 'You need to accept our Terms and Conditions'
    },
    forgotPassword: {
        title: 'Forgot Password',
        header: '<h3>We are here to help you<h3><br>' +
        '<span>Please enter the following information, so we can identify your account,' +
        ' and send you an Access Code by Email or SMS that you can use to login' +
        ' and reset your password.</span>',
        ssn: 'Last 4 digits of the SSN or ITIN',
        ssnHint: 'Enter the last 4 digits of the <br> Social Security Number or ITIN <br> used when registering VoltCash.',
        ssnRegexHint: 'Enter 4 digits',
        reciveBy: 'Receive Access Code by:',
        email: 'Email',
        sms: 'SMS Text',
        weJustSent: 'We just sent you a 6 digits Access Code.' +
        ' You can access with that code for the next 30 minutes.',
        securityCode: 'Security Code',
        resetPassword: "Reset Password",
        retypePassword: 'Retype Password',
        sendmeAccessCode: 'Send me Access Code',
        invalidAccessCode: 'Invalid Access Code'
    },
    home: {
        availableBalance: 'Available Balance',
        completedTransactions: 'COMPLETED TRANSACTIONS'
    },
    contact: {
        title: 'Contact',
        phone: 'Phone Number',
        email: 'Email',
        website: 'Website',
        address: 'Address'
    },
    faq: {
        title: 'FAQ',
        comingSoon: 'Coming soon'
    },
    profile: {
        title: 'Profile',
        personalInformation: 'Personal Information',
        username: 'Username',
        usernameHint: 'This is your Username',
        telephone: 'Telephone',
        telephoneHint: 'Enter telephone number.',
        telephoneRegexHint: 'Enter just digits',
        email: 'Email',
        emailHint: 'Enter your e-mail address. <br> This will be used for password recovery',
        emailRegexHint: 'Invalid email format',
        changePassword: 'Change Password',
        previousPassword: 'Previous Password',
        previousPasswordHint: 'Please enter your previous Password.',
        retypePassword: 'Retype Password',
        accept: 'Accept',
        youProfileHasBeenReplaced: 'Your profile has beed updated'
    },
    replaceCard: {
        title: 'Replace Card',
        newCardNumber: 'New Card Number',
        accept: 'Accept',
        yourCardHasBeenReplaced: 'Your Card has beed replaced'
    },
    txlist: {
        emptyText: 'No results found.',
        noMoreRecordsText: 'No more records',
        pullText: 'Pull down to refresh',
        loadingText: 'Performing search...<br>This may take up to 1 minute.',
    },
    navigationView: {
        back: 'Back'
    },
    mainMenu: {
        logout: 'Logout',
        legal: 'Legal'
    },
    field: {
        requiredField: 'Required Field',
        enterAtLeast: 'Enter at least ',
        characters: ' characters'
    },
    cardField: {
        card: 'Card Number',
        cardHint: 'Please enter your new VoltCash Card number',
        cardRegexHint: 'Credit Card number must to contain 16 digits'
    },
    passwordField: {
        password: 'Password',
        passwordHint: 'Password must to contain at least one <br>UpperCase letter and one number <br> And be at least 8 characters long',
        passwordRegexHint: "Password fields don't match"
    },
    utils: {
        from: 'From ',
        to: ' to '
    },
    periodPicker: {
        selectPeriod: 'Select Period',
        from: 'From:',
        to: 'To:',
        accept: 'Accept',
        cancel: 'Cancel',
        requiredValue: 'Required Value.',
        incorrect: 'Incorrect date range.',
        lessThan1Month: 'Date Renge must to be less than one month.'
    }
});

