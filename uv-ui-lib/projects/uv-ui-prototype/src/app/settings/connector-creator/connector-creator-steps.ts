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
                type: 'input'
            },
            {
                title: 'Restricted Access Format',
                yPos: '',
                name: 'restricted-access-format',
                required: true,
                complete: false,
                type: 'dropdown'
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
                type: 'dropdown'
            },
            {
                title: 'Authorization Method',
                yPos: '',
                name: 'authorization-method',
                required: true,
                complete: false,
                type: 'dropdown'
            },
            {
                title: 'Account Name',
                yPos: '',
                name: 'account-name',
                required: true,
                complete: false,
                type: 'input'
            },
            {
                title: 'Authorization Method',
                yPos: '',
                name: 'authorization-method',
                required: true,
                complete: false,
                type: 'input'
            },
            {
                title: 'Client ID',
                yPos: '',
                name: 'client-id',
                required: true,
                complete: false,
                type: 'input'
            },
            {
                title: 'Tenant ID',
                yPos: '',
                name: 'tenant-id',
                required: true,
                complete: false,
                type: 'input'
            }
        ]
    }
]