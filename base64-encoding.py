import base64

def base64_encode(input_string):
    try:
        # Convert the input string to bytes
        input_bytes = input_string.encode('utf-8')
        
        # Encode the bytes as base64
        encoded_bytes = base64.b64encode(input_bytes)
        
        # Convert the encoded bytes back to a string
        encoded_string = encoded_bytes.decode('utf-8')
        
        return encoded_string
    except Exception as e:
        return f"Error: {str(e)}"

# Input the string you want to encode
input_string = input("Enter the string to encode: ")

# Call the function to encode the string
encoded_result = base64_encode(input_string)

# Display the encoded result
print("Encoded Result:")
print(encoded_result)
