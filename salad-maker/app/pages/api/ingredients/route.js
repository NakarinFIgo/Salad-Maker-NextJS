import ingredients from '../../../data/ingredient.json'

export async function GET(){
    return Response(JSON.stringify(ingredients))
}