import json

def lambda_handler(event, context):
    order_list = ["capers", "mustard", "butter", "eggs", "minced meat", "potatoes", "onions"]
    
    return {
        'statusCode': 200,
        'body': json.dumps(order_list)
    }
