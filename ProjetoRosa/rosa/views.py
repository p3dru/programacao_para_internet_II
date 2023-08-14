from django.shortcuts import render, redirect
from .forms import ProdutoForm
from .models import Produto

# Create your views here.
def criar_produto(request):
    if request.method == 'POST':
        form = ProdutoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('produtos_lista')
        else:
            form = ProdutoForm()
            return render(request, './templates/rosa/criar_produto.html', {'form': form})

def listar_produtos(request):
    produtos = Produto.objects.all()
    return render(request, './rosa/templates/rosa/listar_produtos.html', {'produtos': produtos})

def editar_produtos(request, produto_id):
    produto = Produto.objects.all()
    if request.method == 'POST':
        form = ProdutoForm(request.POST, instance=produto)
        if form.is_valid():
            form.save()
            return redirect('produtos_lista')
        else:
            form = ProdutoForm(instance=produto)
    
    return render(request, './rosa/templates/rosa/editar_produtos.html', {'form': form})

def excluir_produto(request, produto_id):
    produto = Produto.objects.all()
    produto.delete()
    return redirect('produtos_lista')