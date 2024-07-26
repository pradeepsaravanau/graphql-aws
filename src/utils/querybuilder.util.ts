
type ComparisonOperator = '=' | '<>' | '<' | '>' | '<=' | '>=' | 'LIKE' | 'ILIKE' | '~~' | '~~*' | '!~~' | '!~~*' | 'IN' | 'NOT IN' | 'IS NULL' | 'IS NOT NULL';

export interface QueryParam {
    column: string;
    operator: ComparisonOperator;
    value: any;
}

export class QueryBuilder {
    static buildCondition(param: QueryParam, index: number): string {

        const { column, operator, value } = param;
        
        const placeholder = `$${index + 1}`;
        switch (operator) {
            case '<':
            case '>':
            case '<=':
            case '>=':
            case '=':
            case '<>':
                return `${column} ${operator} ${placeholder}`;
            case 'LIKE':
            case 'ILIKE':
            case '~~':
            case '~~*':
            case '!~~':
            case '!~~*':
                return `${column} ${operator} ${placeholder}`;
            case 'IN':
            case 'NOT IN':
                return `${column} ${operator} (${value.map((_: any, i: number) => `$${index + i + 1}`).join(', ')})`;
            case 'IS NULL':
            case 'IS NOT NULL':
                return `${column} ${operator}`;
            default:
                throw new Error(`Unsupported operator: ${operator}`);
        }
    }

    static buildQuery(params: QueryParam[]): { condition: string, values: any[] } {
        const conditions: string[] = [];
        const values: any[] = [];

        params.forEach((param, _index) => {

            const value = param.value;

            conditions.push(this.buildCondition(param, values.length));

            if (Array.isArray(value)) {
                values.push(...value);
            } else {
                value && values.push(value);
            }
            
        });

        const condition = `${conditions.join(' AND ')}`;

        return { condition, values };
    }
}