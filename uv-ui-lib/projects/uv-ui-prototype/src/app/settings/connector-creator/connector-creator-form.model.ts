export interface ConnectorCreatorFormValue {
    sectionTitle: string;
    name: string;
    required: boolean;
    complete: boolean;
    yPos: string;
    steps: ConnectorCreatorFormValueStep[]
}

export interface ConnectorCreatorFormValueStep {
    title: string;
    yPos: string;
    name: string;
    required: boolean;
    complete: boolean;
    selection: string;
    type: string;
    options: string[]
}