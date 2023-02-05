import { Directive, ContentChildren, Input, Output, EventEmitter, QueryList, SimpleChange } from "@angular/core";
import G6, { IG6GraphEvent, ModelConfig, NodeConfig, ShapeStyle, StateStyles, TreeGraphData } from '@antv/g6';
import { Subject } from 'rxjs';

export const treeNode: NodeConfig = G6.registerNode(
    'tree-node',
    {
        drawShape: function drawShape(cfg, group) {
            const rect = group.addShape('rect', {
                attrs: {
                    fill: '#fff',
                    stroke: '#666',
                    x: 0,
                    y: 0,
                    width: 1,
                    height: 1
                },
                // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
                name: 'rect-shape',
            });
            const content = cfg.name;
            const text = group.addShape('text', {
                attrs: {
                    text: content,
                    x: 0,
                    y: 0,
                    textAlign: 'left',
                    textBaseline: 'middle',
                    fill: '#666',
                },
                // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
                name: 'text-shape',
            });
            const bbox = text.getBBox();
            const hasChildren = cfg.children;
            rect.attr({
                x: -bbox.width / 2 - 4,
                y: -bbox.height / 2 - 6,
                width: bbox.width + (hasChildren ? 26 : 12),
                height: bbox.height + 12,
            });
            text.attr({
                x: -bbox.width / 2,
                y: 0
            })
            if (hasChildren) {
                group.addShape('marker', {
                    attrs: {
                        x: bbox.width / 2 + 12,
                        y: 0,
                        r: 6,
                        symbol: cfg.collapsed ? G6.Marker.expand : G6.Marker.collapse,
                        stroke: '#666',
                        lineWidth: 2,
                    },
                    // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
                    name: 'collapse-icon',
                });
            }
            return rect;
        },
        update: (cfg, item) => {
            const group = item.getContainer();
            const icon = group.find((e) => e.get('name') === 'collapse-icon');
            icon.attr('symbol', cfg.collapsed ? G6.Marker.expand : G6.Marker.collapse);
        },
    },
    'single-node',
);