import { ConnectorCreatorFormValue } from "../../services/connector-creator.service";

export const connectorCreatorSteps: ConnectorCreatorFormValue[] = [
    {
        sectionTitle: 'Details',
        name: 'details',
        required: true,
        complete: false,
        yPos: '',
        steps: [
            {
                title: 'Connector Name',
                yPos: '',
                name: 'connection-name',
                required: true,
                complete: false,
                selection: '',
                type: 'input',
                options: ['']
            },
            {
                title: 'Restricted Access Format',
                yPos: '',
                name: 'restricted-access-format',
                required: true,
                complete: false,
                selection: '',
                type: 'dropdown',
                options: [
                    'Hidden', 
                    'Restricted'
                ]
            }
        ]
    },
    {
        sectionTitle: 'Setup',
        name: 'setup',
        required: true,
        complete: false,
        yPos: '',
        steps: [
            {
                title: 'Connection Type',
                yPos: '',
                name: 'connection-type',
                required: true,
                complete: false,
                selection: '',
                type: 'dropdown',
                options: [
                    'Gen2', 
                    'Option', 
                    'Option 2'
                ]
            },
            {
                title: 'Authorization Method',
                yPos: '',
                name: 'authorization-method',
                required: true,
                complete: false,
                selection: '',
                type: 'dropdown',
                options: [
                    'Active Directory Service Principal (recommended)', 
                    'Option', 
                    'Option 2'
                ]
            },
            {
                title: 'Account Name',
                yPos: '',
                name: 'account-name',
                required: true,
                complete: false,
                selection: '',
                type: 'input',
                options: ['']
            },
            {
                title: 'Client ID',
                yPos: '',
                name: 'client-id',
                required: true,
                complete: false,
                selection: '',
                type: 'input',
                options: ['']
            },
            {
                title: 'Tenant ID',
                yPos: '',
                name: 'tenant-id',
                required: true,
                complete: false,
                selection: '',
                type: 'input',
                options: ['']
            }
        ]
    }
]