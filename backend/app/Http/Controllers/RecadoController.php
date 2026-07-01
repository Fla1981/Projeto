<?php

namespace App\Http\Controllers;

use App\Models\Recado;
use Illuminate\Http\Request;

class RecadoController extends Controller
{
    public function index(Request $request)
    {
        return Recado::where('user_id', $request->user()->id)->get();
    }

    public function store(Request $request)
    {
        $dados = $request->validate([
            'titulo' => 'required',
            'texto' => 'required'
        ]);

        return Recado::create([
            'user_id' => $request->user()->id,
            'titulo' => $dados['titulo'],
            'texto' => $dados['texto']
        ]);
    }

    public function destroy(Request $request, int $id)
{
    $recado = Recado::where('user_id', $request->user()->id)
        ->findOrFail($id);

    $recado->delete();

    return response()->json([
        'message' => 'Recado excluído.'
    ]);
}
}
