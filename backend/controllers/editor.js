
import { VM } from 'vm2';



const editor = async ( req,res)=>{
    const { code } = req.body;

    try {
      const vm = new VM({
        timeout: 1000, // to prevent infinite loops
        sandbox: {},
      });
  
      const output = vm.run(code);  // Execute the code safely
      res.json({ output: output ? output.toString() : 'No output' });
    } catch (error) {
      res.status(400).json({ output: 'Error: ' + error.message });
    }
}


export {
    editor
}