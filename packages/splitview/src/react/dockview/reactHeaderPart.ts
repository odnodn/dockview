import * as React from 'react';
import {
    ITabRenderer,
    GroupPanelPartInitParameters,
} from '../../groupview/types';
import { GroupviewPanel } from '../../groupview/v2/groupviewPanel';
import { PanelUpdateEvent } from '../../panel/types';
import { ReactPart, ReactPortalStore } from '../react';
import { IGroupPanelBaseProps } from './dockview';

export class ReactPanelHeaderPart implements ITabRenderer {
    private _element: HTMLElement;
    private part?: ReactPart<IGroupPanelBaseProps>;

    get element() {
        return this._element;
    }

    constructor(
        public readonly id: string,
        private readonly component: React.FunctionComponent<IGroupPanelBaseProps>,
        private readonly reactPortalStore: ReactPortalStore
    ) {
        this._element = document.createElement('div');
    }

    focus() {
        //noop
    }

    public init(parameters: GroupPanelPartInitParameters): void {
        this.part = new ReactPart(
            this.element,
            this.reactPortalStore,
            this.component,
            {
                ...parameters.params,
                api: parameters.api,
                containerApi: parameters.containerApi,
            }
        );
    }

    public update(event: PanelUpdateEvent) {
        //noop
    }

    public toJSON() {
        return {
            id: this.id,
        };
    }

    public layout(width: number, height: number) {
        // noop - retrieval from api
    }

    public updateParentGroup(
        group: GroupviewPanel,
        isPanelVisible: boolean
    ): void {
        // noop - retrieval from api
    }

    public dispose() {
        this.part?.dispose();
    }
}
